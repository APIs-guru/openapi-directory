from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Folder:
    r"""Folder
    Returns information about a folder in a repository.
    """
    
    absolute_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('absolutePath') }})
    relative_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativePath') }})
    tree_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('treeId') }})
    
