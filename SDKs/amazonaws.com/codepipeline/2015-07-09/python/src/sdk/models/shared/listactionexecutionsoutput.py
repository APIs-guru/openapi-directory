from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import actionexecutiondetail


@dataclass_json
@dataclass
class ListActionExecutionsOutput:
    action_execution_details: Optional[List[actionexecutiondetail.ActionExecutionDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionExecutionDetails' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
