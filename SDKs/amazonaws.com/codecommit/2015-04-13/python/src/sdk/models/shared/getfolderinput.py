from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetFolderInput:
    folder_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('folderPath') }})
    repository_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    commit_specifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitSpecifier') }})
    
