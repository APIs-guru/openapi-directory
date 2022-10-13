from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import taskdefinition


@dataclass_json
@dataclass
class DeregisterTaskDefinitionResponse:
    task_definition: Optional[taskdefinition.TaskDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskDefinition' }})
    
