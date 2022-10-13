from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import violationevent


@dataclass_json
@dataclass
class ListViolationEventsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    violation_events: Optional[List[violationevent.ViolationEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violationEvents' }})
    
