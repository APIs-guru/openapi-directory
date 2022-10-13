from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import taskrun


@dataclass_json
@dataclass
class GetMlTaskRunsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    task_runs: Optional[List[taskrun.TaskRun]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskRuns' }})
    
