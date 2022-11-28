from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TaskExecutionListEntry:
    r"""TaskExecutionListEntry
    Represents a single entry in a list of task executions. <code>TaskExecutionListEntry</code> returns an array that contains a list of specific invocations of a task when the <a href=\"https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTaskExecutions.html\">ListTaskExecutions</a> operation is called.
    """
    
    status: Optional[TaskExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    task_execution_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskExecutionArn') }})
    
