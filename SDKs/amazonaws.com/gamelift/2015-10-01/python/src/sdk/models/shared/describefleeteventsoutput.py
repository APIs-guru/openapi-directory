from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import event


@dataclass_json
@dataclass
class DescribeFleetEventsOutput:
    events: Optional[List[event.Event]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Events' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
