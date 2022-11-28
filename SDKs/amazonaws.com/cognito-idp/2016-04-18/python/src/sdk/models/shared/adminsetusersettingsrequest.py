from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AdminSetUserSettingsRequest:
    r"""AdminSetUserSettingsRequest
    You can use this parameter to set an MFA configuration that uses the SMS delivery medium.
    """
    
    mfa_options: List[MfaOptionType] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MFAOptions') }})
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
