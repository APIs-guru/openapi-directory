from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import mfamode_enum
from . import settings


@dataclass_json
@dataclass
class UpdateBackendAuthMfaConfig:
    mfa_mode: Optional[mfamode_enum.MfaModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MFAMode' }})
    settings: Optional[settings.Settings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Settings' }})
    
