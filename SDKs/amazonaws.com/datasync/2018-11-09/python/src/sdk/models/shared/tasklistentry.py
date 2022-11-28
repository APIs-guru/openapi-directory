from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TaskListEntry:
    r"""TaskListEntry
    Represents a single entry in a list of tasks. <code>TaskListEntry</code> returns an array that contains a list of tasks when the <a href=\"https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTasks.html\">ListTasks</a> operation is called. A task includes the source and destination file systems to sync and the options to use for the tasks.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    status: Optional[TaskStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskArn') }})
    
