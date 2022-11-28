from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IsBinaryFile:
    r"""IsBinaryFile
    Information about whether a file is binary or textual in a merge or pull request operation.
    """
    
    base: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base') }})
    destination: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    source: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
