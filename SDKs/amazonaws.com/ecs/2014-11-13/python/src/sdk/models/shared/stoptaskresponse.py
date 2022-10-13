from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import task


@dataclass_json
@dataclass
class StopTaskResponse:
    task: Optional[task.Task] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task' }})
    
