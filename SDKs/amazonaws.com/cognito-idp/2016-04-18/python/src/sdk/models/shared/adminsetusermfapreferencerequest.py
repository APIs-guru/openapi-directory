from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import smsmfasettingstype
from . import softwaretokenmfasettingstype


@dataclass_json
@dataclass
class AdminSetUserMfaPreferenceRequest:
    sms_mfa_settings: Optional[smsmfasettingstype.SmsMfaSettingsType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SMSMfaSettings' }})
    software_token_mfa_settings: Optional[softwaretokenmfasettingstype.SoftwareTokenMfaSettingsType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SoftwareTokenMfaSettings' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    
