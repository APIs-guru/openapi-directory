from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workflow


@dataclass_json
@dataclass
class BatchGetWorkflowsResponse:
    missing_workflows: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MissingWorkflows' }})
    workflows: Optional[List[workflow.Workflow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Workflows' }})
    
