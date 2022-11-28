from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateBackendAuthForgotPasswordConfig:
    r"""CreateBackendAuthForgotPasswordConfig
    Describes the forgot password policy for authenticating into the Amplify app.
    """
    
    delivery_method: DeliveryMethodEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryMethod') }})
    email_settings: Optional[EmailSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailSettings') }})
    sms_settings: Optional[SmsSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsSettings') }})
    
