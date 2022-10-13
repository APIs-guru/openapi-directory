from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eventsource


@dataclass_json
@dataclass
class ListEventSourcesResponse:
    event_sources: Optional[List[eventsource.EventSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventSources' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
