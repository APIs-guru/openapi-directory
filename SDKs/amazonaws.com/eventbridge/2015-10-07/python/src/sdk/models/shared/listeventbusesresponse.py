from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eventbus


@dataclass_json
@dataclass
class ListEventBusesResponse:
    event_buses: Optional[List[eventbus.EventBus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventBuses' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
