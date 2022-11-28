from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SetUserSettingsRequest:
    r"""SetUserSettingsRequest
    Represents the request to set user settings.
    """
    
    access_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    mfa_options: List[MfaOptionType] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MFAOptions') }})
    
