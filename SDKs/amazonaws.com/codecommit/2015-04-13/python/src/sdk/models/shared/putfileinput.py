from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import filemodetypeenum_enum


@dataclass_json
@dataclass
class PutFileInput:
    branch_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchName' }})
    commit_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitMessage' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    file_content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileContent' }})
    file_mode: Optional[filemodetypeenum_enum.FileModeTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileMode' }})
    file_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filePath' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentCommitId' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
