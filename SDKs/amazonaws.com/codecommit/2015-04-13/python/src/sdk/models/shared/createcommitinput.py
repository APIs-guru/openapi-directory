from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deletefileentry
from . import putfileentry
from . import setfilemodeentry


@dataclass_json
@dataclass
class CreateCommitInput:
    author_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorName' }})
    branch_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchName' }})
    commit_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitMessage' }})
    delete_files: Optional[List[deletefileentry.DeleteFileEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteFiles' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    keep_empty_folders: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keepEmptyFolders' }})
    parent_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentCommitId' }})
    put_files: Optional[List[putfileentry.PutFileEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'putFiles' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    set_file_modes: Optional[List[setfilemodeentry.SetFileModeEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setFileModes' }})
    
