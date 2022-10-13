from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import action


@dataclass_json
@dataclass
class GetActionResponse:
    action: Optional[action.Action] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    
