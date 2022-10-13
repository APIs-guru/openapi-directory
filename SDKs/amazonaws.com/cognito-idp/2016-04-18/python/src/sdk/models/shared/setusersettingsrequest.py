from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import mfaoptiontype


@dataclass_json
@dataclass
class SetUserSettingsRequest:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessToken' }})
    mfa_options: List[mfaoptiontype.MfaOptionType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MFAOptions' }})
    
