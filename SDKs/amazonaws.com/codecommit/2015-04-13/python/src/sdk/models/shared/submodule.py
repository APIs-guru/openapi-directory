from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SubModule:
    r"""SubModule
    Returns information about a submodule reference in a repository folder.
    """
    
    absolute_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('absolutePath') }})
    commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitId') }})
    relative_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativePath') }})
    
