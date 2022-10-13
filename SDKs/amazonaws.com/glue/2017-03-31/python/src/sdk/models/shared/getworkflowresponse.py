from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import workflow


@dataclass_json
@dataclass
class GetWorkflowResponse:
    workflow: Optional[workflow.Workflow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Workflow' }})
    
