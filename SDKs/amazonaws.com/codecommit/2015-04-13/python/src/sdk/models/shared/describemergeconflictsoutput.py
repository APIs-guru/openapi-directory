from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import conflictmetadata
from . import mergehunk


@dataclass_json
@dataclass
class DescribeMergeConflictsOutput:
    base_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseCommitId' }})
    conflict_metadata: conflictmetadata.ConflictMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conflictMetadata' }})
    destination_commit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationCommitId' }})
    merge_hunks: List[mergehunk.MergeHunk] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeHunks' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    source_commit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceCommitId' }})
    
