from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import actionsummary


@dataclass_json
@dataclass
class ListActionsResponse:
    actions: Optional[List[actionsummary.ActionSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
