from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutFileInput:
    branch_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchName') }})
    file_content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileContent') }})
    file_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    repository_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    commit_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitMessage') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    file_mode: Optional[FileModeTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileMode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentCommitId') }})
    
