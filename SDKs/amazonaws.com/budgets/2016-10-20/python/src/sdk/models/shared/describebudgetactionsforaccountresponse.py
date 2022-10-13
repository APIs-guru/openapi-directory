from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import action


@dataclass_json
@dataclass
class DescribeBudgetActionsForAccountResponse:
    actions: List[action.Action] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Actions' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
