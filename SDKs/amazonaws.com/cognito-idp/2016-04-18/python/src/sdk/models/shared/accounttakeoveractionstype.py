from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accounttakeoveractiontype
from . import accounttakeoveractiontype
from . import accounttakeoveractiontype


@dataclass_json
@dataclass
class AccountTakeoverActionsType:
    high_action: Optional[accounttakeoveractiontype.AccountTakeoverActionType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HighAction' }})
    low_action: Optional[accounttakeoveractiontype.AccountTakeoverActionType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LowAction' }})
    medium_action: Optional[accounttakeoveractiontype.AccountTakeoverActionType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediumAction' }})
    
