from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Conflict:
    r"""Conflict
    Information about conflicts in a merge operation.
    """
    
    conflict_metadata: Optional[ConflictMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictMetadata') }})
    merge_hunks: Optional[List[MergeHunk]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeHunks') }})
    
