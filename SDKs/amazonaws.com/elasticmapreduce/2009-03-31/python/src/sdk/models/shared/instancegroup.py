from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import autoscalingpolicydescription
from . import configuration
from . import ebsblockdevice
from . import instancegrouptype_enum
from . import configuration
from . import markettype_enum
from . import shrinkpolicy
from . import instancegroupstatus


@dataclass_json
@dataclass
class InstanceGroup:
    auto_scaling_policy: Optional[autoscalingpolicydescription.AutoScalingPolicyDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingPolicy' }})
    bid_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BidPrice' }})
    configurations: Optional[List[configuration.Configuration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Configurations' }})
    configurations_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationsVersion' }})
    custom_ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomAmiId' }})
    ebs_block_devices: Optional[List[ebsblockdevice.EbsBlockDevice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EbsBlockDevices' }})
    ebs_optimized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EbsOptimized' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    instance_group_type: Optional[instancegrouptype_enum.InstanceGroupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceGroupType' }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    last_successfully_applied_configurations: Optional[List[configuration.Configuration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastSuccessfullyAppliedConfigurations' }})
    last_successfully_applied_configurations_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastSuccessfullyAppliedConfigurationsVersion' }})
    market: Optional[markettype_enum.MarketTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Market' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    requested_instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestedInstanceCount' }})
    running_instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunningInstanceCount' }})
    shrink_policy: Optional[shrinkpolicy.ShrinkPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShrinkPolicy' }})
    status: Optional[instancegroupstatus.InstanceGroupStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
