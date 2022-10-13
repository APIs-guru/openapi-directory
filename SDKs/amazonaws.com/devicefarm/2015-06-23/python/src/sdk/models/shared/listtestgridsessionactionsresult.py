from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import testgridsessionaction


@dataclass_json
@dataclass
class ListTestGridSessionActionsResult:
    actions: Optional[List[testgridsessionaction.TestGridSessionAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
