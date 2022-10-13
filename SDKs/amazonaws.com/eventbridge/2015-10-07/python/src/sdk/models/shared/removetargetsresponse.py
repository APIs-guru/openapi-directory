from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import removetargetsresultentry


@dataclass_json
@dataclass
class RemoveTargetsResponse:
    failed_entries: Optional[List[removetargetsresultentry.RemoveTargetsResultEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedEntries' }})
    failed_entry_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedEntryCount' }})
    
