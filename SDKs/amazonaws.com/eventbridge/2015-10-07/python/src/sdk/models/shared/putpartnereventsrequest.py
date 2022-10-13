from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import putpartnereventsrequestentry


@dataclass_json
@dataclass
class PutPartnerEventsRequest:
    entries: List[putpartnereventsrequestentry.PutPartnerEventsRequestEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entries' }})
    
