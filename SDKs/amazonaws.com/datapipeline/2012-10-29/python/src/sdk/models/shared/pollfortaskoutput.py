from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import taskobject


@dataclass_json
@dataclass
class PollForTaskOutput:
    task_object: Optional[taskobject.TaskObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskObject' }})
    
