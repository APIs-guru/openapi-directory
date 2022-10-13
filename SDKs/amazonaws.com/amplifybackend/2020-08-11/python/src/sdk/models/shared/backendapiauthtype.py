from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import mode_enum
from . import backendapiappsyncauthsettings


@dataclass_json
@dataclass
class BackendAPIAuthType:
    mode: Optional[mode_enum.ModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mode' }})
    settings: Optional[backendapiappsyncauthsettings.BackendAPIAppSyncAuthSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Settings' }})
    
