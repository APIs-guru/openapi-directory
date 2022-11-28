from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListActionTypesInput:
    r"""ListActionTypesInput
    Represents the input of a <code>ListActionTypes</code> action.
    """
    
    action_owner_filter: Optional[ActionOwnerEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionOwnerFilter') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    region_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionFilter') }})
    
