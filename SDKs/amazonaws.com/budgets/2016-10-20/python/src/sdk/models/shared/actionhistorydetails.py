from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import action


@dataclass_json
@dataclass
class ActionHistoryDetails:
    action: action.Action = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    
