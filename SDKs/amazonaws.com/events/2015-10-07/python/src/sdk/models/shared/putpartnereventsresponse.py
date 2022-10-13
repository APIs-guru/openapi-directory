from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import putpartnereventsresultentry


@dataclass_json
@dataclass
class PutPartnerEventsResponse:
    entries: Optional[List[putpartnereventsresultentry.PutPartnerEventsResultEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entries' }})
    failed_entry_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedEntryCount' }})
    
