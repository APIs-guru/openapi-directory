from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceGroup:
    r"""InstanceGroup
    This entity represents an instance group, which is a group of instances that have common purpose. For example, CORE instance group is used for HDFS.
    """
    
    auto_scaling_policy: Optional[AutoScalingPolicyDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingPolicy') }})
    bid_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BidPrice') }})
    configurations: Optional[List[Configuration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configurations') }})
    configurations_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationsVersion') }})
    custom_ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomAmiId') }})
    ebs_block_devices: Optional[List[EbsBlockDevice]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EbsBlockDevices') }})
    ebs_optimized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EbsOptimized') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    instance_group_type: Optional[InstanceGroupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceGroupType') }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    last_successfully_applied_configurations: Optional[List[Configuration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastSuccessfullyAppliedConfigurations') }})
    last_successfully_applied_configurations_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastSuccessfullyAppliedConfigurationsVersion') }})
    market: Optional[MarketTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Market') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    requested_instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestedInstanceCount') }})
    running_instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunningInstanceCount') }})
    shrink_policy: Optional[ShrinkPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShrinkPolicy') }})
    status: Optional[InstanceGroupStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
