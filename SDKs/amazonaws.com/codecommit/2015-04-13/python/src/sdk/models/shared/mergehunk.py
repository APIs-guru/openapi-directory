from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MergeHunk:
    r"""MergeHunk
    Information about merge hunks in a merge or pull request operation.
    """
    
    base: Optional[MergeHunkDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base') }})
    destination: Optional[MergeHunkDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    is_conflict: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isConflict') }})
    source: Optional[MergeHunkDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
