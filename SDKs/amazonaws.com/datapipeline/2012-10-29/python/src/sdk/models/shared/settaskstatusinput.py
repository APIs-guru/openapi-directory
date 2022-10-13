from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import taskstatus_enum


@dataclass_json
@dataclass
class SetTaskStatusInput:
    error_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorId' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    error_stack_trace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorStackTrace' }})
    task_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskId' }})
    task_status: taskstatus_enum.TaskStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskStatus' }})
    
