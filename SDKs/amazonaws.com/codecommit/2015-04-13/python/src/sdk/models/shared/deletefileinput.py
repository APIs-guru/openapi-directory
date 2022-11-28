from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteFileInput:
    branch_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchName') }})
    file_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    parent_commit_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentCommitId') }})
    repository_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    commit_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitMessage') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    keep_empty_folders: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keepEmptyFolders') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
