from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import failure
from . import task


@dataclass_json
@dataclass
class RunTaskResponse:
    failures: Optional[List[failure.Failure]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failures' }})
    tasks: Optional[List[task.Task]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tasks' }})
    
