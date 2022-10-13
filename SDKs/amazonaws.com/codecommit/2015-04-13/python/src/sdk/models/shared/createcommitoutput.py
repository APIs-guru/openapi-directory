from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filemetadata
from . import filemetadata
from . import filemetadata


@dataclass_json
@dataclass
class CreateCommitOutput:
    commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitId' }})
    files_added: Optional[List[filemetadata.FileMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filesAdded' }})
    files_deleted: Optional[List[filemetadata.FileMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filesDeleted' }})
    files_updated: Optional[List[filemetadata.FileMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filesUpdated' }})
    tree_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'treeId' }})
    
