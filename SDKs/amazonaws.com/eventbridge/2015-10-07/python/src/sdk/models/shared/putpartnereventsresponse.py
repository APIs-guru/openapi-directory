from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutPartnerEventsResponse:
    entries: Optional[List[PutPartnerEventsResultEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entries') }})
    failed_entry_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedEntryCount') }})
    
