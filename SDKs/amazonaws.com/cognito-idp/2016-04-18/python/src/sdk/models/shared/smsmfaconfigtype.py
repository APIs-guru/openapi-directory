from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SmsMfaConfigType:
    r"""SmsMfaConfigType
    The SMS text message multi-factor authentication (MFA) configuration type.
    """
    
    sms_authentication_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsAuthenticationMessage') }})
    sms_configuration: Optional[SmsConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsConfiguration') }})
    
