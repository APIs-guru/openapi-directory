from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import taskset


@dataclass_json
@dataclass
class CreateTaskSetResponse:
    task_set: Optional[taskset.TaskSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskSet' }})
    
