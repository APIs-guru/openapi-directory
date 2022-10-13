from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import file
from . import folder
from . import submodule
from . import symboliclink


@dataclass_json
@dataclass
class GetFolderOutput:
    commit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitId' }})
    files: Optional[List[file.File]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    folder_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folderPath' }})
    sub_folders: Optional[List[folder.Folder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subFolders' }})
    sub_modules: Optional[List[submodule.SubModule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subModules' }})
    symbolic_links: Optional[List[symboliclink.SymbolicLink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'symbolicLinks' }})
    tree_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'treeId' }})
    
