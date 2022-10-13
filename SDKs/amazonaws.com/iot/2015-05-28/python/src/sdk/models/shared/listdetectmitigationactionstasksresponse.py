from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import detectmitigationactionstasksummary


@dataclass_json
@dataclass
class ListDetectMitigationActionsTasksResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    tasks: Optional[List[detectmitigationactionstasksummary.DetectMitigationActionsTaskSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tasks' }})
    
