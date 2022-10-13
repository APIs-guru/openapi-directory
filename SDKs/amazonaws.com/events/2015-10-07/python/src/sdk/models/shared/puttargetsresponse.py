from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import puttargetsresultentry


@dataclass_json
@dataclass
class PutTargetsResponse:
    failed_entries: Optional[List[puttargetsresultentry.PutTargetsResultEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedEntries' }})
    failed_entry_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedEntryCount' }})
    
