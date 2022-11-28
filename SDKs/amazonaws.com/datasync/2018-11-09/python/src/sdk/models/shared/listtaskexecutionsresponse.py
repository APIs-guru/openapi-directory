from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTaskExecutionsResponse:
    r"""ListTaskExecutionsResponse
    ListTaskExecutionsResponse
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    task_executions: Optional[List[TaskExecutionListEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskExecutions') }})
    
