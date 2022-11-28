from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateBackendAuthMfaConfig:
    r"""UpdateBackendAuthMfaConfig
    Updates the multi-factor authentication (MFA) configuration for the backend of your Amplify project.
    """
    
    mfa_mode: Optional[MfaModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MFAMode') }})
    settings: Optional[Settings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    
