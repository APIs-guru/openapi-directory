from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deviceevent


@dataclass_json
@dataclass
class ListDeviceEventsResponse:
    events: Optional[List[deviceevent.DeviceEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Events' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
