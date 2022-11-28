from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceGroupConfig:
    r"""InstanceGroupConfig
    Configuration defining a new instance group.
    """
    
    instance_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceCount') }})
    instance_role: InstanceRoleTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceRole') }})
    instance_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    auto_scaling_policy: Optional[AutoScalingPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingPolicy') }})
    bid_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BidPrice') }})
    configurations: Optional[List[Configuration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configurations') }})
    custom_ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomAmiId') }})
    ebs_configuration: Optional[EbsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EbsConfiguration') }})
    market: Optional[MarketTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Market') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
