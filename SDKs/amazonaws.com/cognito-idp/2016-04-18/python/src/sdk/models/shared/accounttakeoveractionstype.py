from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountTakeoverActionsType:
    r"""AccountTakeoverActionsType
    Account takeover actions type.
    """
    
    high_action: Optional[AccountTakeoverActionType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HighAction') }})
    low_action: Optional[AccountTakeoverActionType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LowAction') }})
    medium_action: Optional[AccountTakeoverActionType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediumAction') }})
    
