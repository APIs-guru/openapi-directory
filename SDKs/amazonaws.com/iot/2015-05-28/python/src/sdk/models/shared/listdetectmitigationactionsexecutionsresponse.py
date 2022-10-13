from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import detectmitigationactionexecution


@dataclass_json
@dataclass
class ListDetectMitigationActionsExecutionsResponse:
    actions_executions: Optional[List[detectmitigationactionexecution.DetectMitigationActionExecution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionsExecutions' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
