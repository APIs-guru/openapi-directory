from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import workflowrun


@dataclass_json
@dataclass
class GetWorkflowRunResponse:
    run: Optional[workflowrun.WorkflowRun] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Run' }})
    
