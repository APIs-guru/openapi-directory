from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetFolderInput:
    commit_specifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitSpecifier' }})
    folder_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folderPath' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
