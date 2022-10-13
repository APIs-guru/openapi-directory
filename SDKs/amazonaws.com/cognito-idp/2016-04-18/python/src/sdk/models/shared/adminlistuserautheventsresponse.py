from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import autheventtype


@dataclass_json
@dataclass
class AdminListUserAuthEventsResponse:
    auth_events: Optional[List[autheventtype.AuthEventType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthEvents' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
