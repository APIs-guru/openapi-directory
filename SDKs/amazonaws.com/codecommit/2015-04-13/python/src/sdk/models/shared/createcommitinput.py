from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateCommitInput:
    branch_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchName') }})
    repository_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    author_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorName') }})
    commit_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitMessage') }})
    delete_files: Optional[List[DeleteFileEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteFiles') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    keep_empty_folders: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keepEmptyFolders') }})
    parent_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentCommitId') }})
    put_files: Optional[List[PutFileEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('putFiles') }})
    set_file_modes: Optional[List[SetFileModeEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setFileModes') }})
    
