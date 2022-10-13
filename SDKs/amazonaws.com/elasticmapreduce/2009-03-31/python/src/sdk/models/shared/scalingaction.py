from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import markettype_enum
from . import simplescalingpolicyconfiguration


@dataclass_json
@dataclass
class ScalingAction:
    market: Optional[markettype_enum.MarketTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Market' }})
    simple_scaling_policy_configuration: simplescalingpolicyconfiguration.SimpleScalingPolicyConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SimpleScalingPolicyConfiguration' }})
    
