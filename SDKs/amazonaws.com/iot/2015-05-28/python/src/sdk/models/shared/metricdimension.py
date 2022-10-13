from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dimensionvalueoperator_enum


@dataclass_json
@dataclass
class MetricDimension:
    dimension_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionName' }})
    operator: Optional[dimensionvalueoperator_enum.DimensionValueOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    
