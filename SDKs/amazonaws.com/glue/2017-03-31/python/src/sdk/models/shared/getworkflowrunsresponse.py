from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workflowrun


@dataclass_json
@dataclass
class GetWorkflowRunsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    runs: Optional[List[workflowrun.WorkflowRun]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Runs' }})
    
