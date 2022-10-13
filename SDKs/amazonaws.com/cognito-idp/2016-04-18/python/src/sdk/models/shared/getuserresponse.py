from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import mfaoptiontype
from . import attributetype


@dataclass_json
@dataclass
class GetUserResponse:
    mfa_options: Optional[List[mfaoptiontype.MfaOptionType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MFAOptions' }})
    preferred_mfa_setting: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredMfaSetting' }})
    user_attributes: List[attributetype.AttributeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserAttributes' }})
    user_mfa_setting_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserMFASettingList' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    
