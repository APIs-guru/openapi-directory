from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import conflictmetadata


@dataclass_json
@dataclass
class GetMergeConflictsOutput:
    base_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseCommitId' }})
    conflict_metadata_list: List[conflictmetadata.ConflictMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conflictMetadataList' }})
    destination_commit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationCommitId' }})
    mergeable: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeable' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    source_commit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceCommitId' }})
    
