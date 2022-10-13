from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import accounttakeovereventactiontype_enum


@dataclass_json
@dataclass
class AccountTakeoverActionType:
    event_action: accounttakeovereventactiontype_enum.AccountTakeoverEventActionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventAction' }})
    notify: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notify' }})
    
