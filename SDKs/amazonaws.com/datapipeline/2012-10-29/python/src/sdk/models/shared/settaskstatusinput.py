from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SetTaskStatusInput:
    r"""SetTaskStatusInput
    Contains the parameters for SetTaskStatus.
    """
    
    task_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    task_status: TaskStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStatus') }})
    error_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorId') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    error_stack_trace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorStackTrace') }})
    
