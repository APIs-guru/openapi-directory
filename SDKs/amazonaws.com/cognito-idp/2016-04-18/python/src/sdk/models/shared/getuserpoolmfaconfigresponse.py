from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetUserPoolMfaConfigResponse:
    mfa_configuration: Optional[UserPoolMfaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MfaConfiguration') }})
    sms_mfa_configuration: Optional[SmsMfaConfigType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsMfaConfiguration') }})
    software_token_mfa_configuration: Optional[SoftwareTokenMfaConfigType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SoftwareTokenMfaConfiguration') }})
    
