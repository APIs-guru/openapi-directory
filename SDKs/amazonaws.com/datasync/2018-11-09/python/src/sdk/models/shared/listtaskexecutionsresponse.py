from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import taskexecutionlistentry


@dataclass_json
@dataclass
class ListTaskExecutionsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    task_executions: Optional[List[taskexecutionlistentry.TaskExecutionListEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskExecutions' }})
    
