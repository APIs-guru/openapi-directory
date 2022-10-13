from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import trigger


@dataclass_json
@dataclass
class TriggerNodeDetails:
    trigger: Optional[trigger.Trigger] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Trigger' }})
    
