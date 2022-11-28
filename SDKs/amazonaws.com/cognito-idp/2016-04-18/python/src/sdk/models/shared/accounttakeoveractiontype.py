from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountTakeoverActionType:
    r"""AccountTakeoverActionType
    Account takeover action type.
    """
    
    event_action: AccountTakeoverEventActionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventAction') }})
    notify: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notify') }})
    
