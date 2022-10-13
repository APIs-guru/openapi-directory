from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import triggerupdate


@dataclass_json
@dataclass
class UpdateTriggerRequest:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    trigger_update: triggerupdate.TriggerUpdate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TriggerUpdate' }})
    
