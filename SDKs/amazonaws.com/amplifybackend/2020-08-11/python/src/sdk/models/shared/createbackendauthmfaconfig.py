from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateBackendAuthMfaConfig:
    r"""CreateBackendAuthMfaConfig
    Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
    """
    
    mfa_mode: MfaModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MFAMode') }})
    settings: Optional[Settings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    
