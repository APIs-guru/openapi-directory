from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetMergeConflictsOutput:
    conflict_metadata_list: List[ConflictMetadata] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictMetadataList') }})
    destination_commit_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationCommitId') }})
    mergeable: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeable') }})
    source_commit_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceCommitId') }})
    base_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseCommitId') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
