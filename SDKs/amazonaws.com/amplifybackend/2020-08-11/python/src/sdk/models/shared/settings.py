from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Settings:
    r"""Settings
    The settings of your MFA configuration for the backend of your Amplify project.
    """
    
    mfa_types: Optional[List[MfaTypesElementEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MfaTypes') }})
    sms_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsMessage') }})
    
