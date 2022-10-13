from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import puteventsresultentry


@dataclass_json
@dataclass
class PutEventsResponse:
    entries: Optional[List[puteventsresultentry.PutEventsResultEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entries' }})
    failed_entry_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedEntryCount' }})
    
