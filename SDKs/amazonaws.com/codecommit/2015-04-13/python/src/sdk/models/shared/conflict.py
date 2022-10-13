from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import conflictmetadata
from . import mergehunk


@dataclass_json
@dataclass
class Conflict:
    conflict_metadata: Optional[conflictmetadata.ConflictMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conflictMetadata' }})
    merge_hunks: Optional[List[mergehunk.MergeHunk]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeHunks' }})
    
