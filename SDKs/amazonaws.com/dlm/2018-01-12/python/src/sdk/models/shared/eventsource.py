from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import eventparameters
from . import eventsourcevalues_enum


@dataclass_json
@dataclass
class EventSource:
    parameters: Optional[eventparameters.EventParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    type: eventsourcevalues_enum.EventSourceValuesEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
