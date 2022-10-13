from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import puteventsrequestentry


@dataclass_json
@dataclass
class PutEventsRequest:
    entries: List[puteventsrequestentry.PutEventsRequestEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entries' }})
    
