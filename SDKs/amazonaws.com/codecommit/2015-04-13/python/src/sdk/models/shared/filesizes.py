from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FileSizes:
    r"""FileSizes
    Information about the size of files in a merge or pull request.
    """
    
    base: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base') }})
    destination: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    source: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
