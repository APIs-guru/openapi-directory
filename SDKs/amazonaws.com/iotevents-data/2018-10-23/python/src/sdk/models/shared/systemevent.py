from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import eventtype_enum
from . import statechangeconfiguration


@dataclass_json
@dataclass
class SystemEvent:
    event_type: Optional[eventtype_enum.EventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    state_change_configuration: Optional[statechangeconfiguration.StateChangeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateChangeConfiguration' }})
    
