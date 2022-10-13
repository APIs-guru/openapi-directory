from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import autoscalingpolicy
from . import configuration
from . import ebsconfiguration
from . import instanceroletype_enum
from . import markettype_enum


@dataclass_json
@dataclass
class InstanceGroupConfig:
    auto_scaling_policy: Optional[autoscalingpolicy.AutoScalingPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingPolicy' }})
    bid_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BidPrice' }})
    configurations: Optional[List[configuration.Configuration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Configurations' }})
    custom_ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomAmiId' }})
    ebs_configuration: Optional[ebsconfiguration.EbsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EbsConfiguration' }})
    instance_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceCount' }})
    instance_role: instanceroletype_enum.InstanceRoleTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceRole' }})
    instance_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    market: Optional[markettype_enum.MarketTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Market' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
