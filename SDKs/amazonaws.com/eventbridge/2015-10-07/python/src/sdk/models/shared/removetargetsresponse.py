from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RemoveTargetsResponse:
    failed_entries: Optional[List[RemoveTargetsResultEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedEntries') }})
    failed_entry_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedEntryCount') }})
    
