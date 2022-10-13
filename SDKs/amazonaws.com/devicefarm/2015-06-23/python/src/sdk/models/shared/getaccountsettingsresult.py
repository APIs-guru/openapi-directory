from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accountsettings


@dataclass_json
@dataclass
class GetAccountSettingsResult:
    account_settings: Optional[accountsettings.AccountSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountSettings' }})
    
