from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import adjustmenttype_enum


@dataclass_json
@dataclass
class SimpleScalingPolicyConfiguration:
    adjustment_type: Optional[adjustmenttype_enum.AdjustmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdjustmentType' }})
    cool_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CoolDown' }})
    scaling_adjustment: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingAdjustment' }})
    
