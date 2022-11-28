from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchDescribeMergeConflictsOutput:
    conflicts: List[Conflict] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflicts') }})
    destination_commit_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationCommitId') }})
    source_commit_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceCommitId') }})
    base_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseCommitId') }})
    errors: Optional[List[BatchDescribeMergeConflictsError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
