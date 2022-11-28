from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PatchOperation:
    r"""PatchOperation
    A single patch operation to apply to the specified resource. Please refer to http://tools.ietf.org/html/rfc6902#section-4 for an explanation of how each operation is used.
    """
    
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    op: Optional[OpEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('op') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
