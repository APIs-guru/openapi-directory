from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetMergeCommitOutput:
    base_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseCommitId' }})
    destination_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationCommitId' }})
    merged_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergedCommitId' }})
    source_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceCommitId' }})
    
