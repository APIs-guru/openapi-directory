from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteFileOutput:
    blob_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blobId' }})
    commit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitId' }})
    file_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filePath' }})
    tree_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'treeId' }})
    
