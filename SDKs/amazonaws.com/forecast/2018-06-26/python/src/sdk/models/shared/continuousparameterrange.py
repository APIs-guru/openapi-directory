from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import scalingtype_enum


@dataclass_json
@dataclass
class ContinuousParameterRange:
    max_value: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxValue' }})
    min_value: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinValue' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scaling_type: Optional[scalingtype_enum.ScalingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingType' }})
    
