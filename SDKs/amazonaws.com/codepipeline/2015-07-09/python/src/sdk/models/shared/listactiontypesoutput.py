from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListActionTypesOutput:
    r"""ListActionTypesOutput
    Represents the output of a <code>ListActionTypes</code> action.
    """
    
    action_types: List[ActionType] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionTypes') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
