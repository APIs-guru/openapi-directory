from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteFileOutput:
    blob_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobId') }})
    commit_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitId') }})
    file_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    tree_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('treeId') }})
    
