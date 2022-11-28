from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetUserResponse:
    r"""GetUserResponse
    Represents the response from the server from the request to get information about the user.
    """
    
    user_attributes: List[AttributeType] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserAttributes') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    mfa_options: Optional[List[MfaOptionType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MFAOptions') }})
    preferred_mfa_setting: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredMfaSetting') }})
    user_mfa_setting_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserMFASettingList') }})
    
