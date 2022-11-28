from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetFolderOutput:
    commit_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitId') }})
    folder_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('folderPath') }})
    files: Optional[List[File]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    sub_folders: Optional[List[Folder]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subFolders') }})
    sub_modules: Optional[List[SubModule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subModules') }})
    symbolic_links: Optional[List[SymbolicLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbolicLinks') }})
    tree_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('treeId') }})
    
