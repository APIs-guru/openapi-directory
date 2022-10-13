from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import actiontype


@dataclass_json
@dataclass
class ListActionTypesOutput:
    action_types: List[actiontype.ActionType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionTypes' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
