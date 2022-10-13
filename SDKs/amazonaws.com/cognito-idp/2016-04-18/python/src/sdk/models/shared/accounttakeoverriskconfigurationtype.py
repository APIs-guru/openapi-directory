from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accounttakeoveractionstype
from . import notifyconfigurationtype


@dataclass_json
@dataclass
class AccountTakeoverRiskConfigurationType:
    actions: accounttakeoveractionstype.AccountTakeoverActionsType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Actions' }})
    notify_configuration: Optional[notifyconfigurationtype.NotifyConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotifyConfiguration' }})
    
