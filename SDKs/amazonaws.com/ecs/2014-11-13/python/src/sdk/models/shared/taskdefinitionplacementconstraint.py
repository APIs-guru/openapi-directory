from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import taskdefinitionplacementconstrainttype_enum


@dataclass_json
@dataclass
class TaskDefinitionPlacementConstraint:
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expression' }})
    type: Optional[taskdefinitionplacementconstrainttype_enum.TaskDefinitionPlacementConstraintTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
