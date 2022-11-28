from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SetUserMfaPreferenceRequest:
    access_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    sms_mfa_settings: Optional[SmsMfaSettingsType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SMSMfaSettings') }})
    software_token_mfa_settings: Optional[SoftwareTokenMfaSettingsType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SoftwareTokenMfaSettings') }})
    
