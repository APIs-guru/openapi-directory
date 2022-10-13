from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import placementconstrainttype_enum


@dataclass_json
@dataclass
class PlacementConstraint:
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expression' }})
    type: Optional[placementconstrainttype_enum.PlacementConstraintTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
