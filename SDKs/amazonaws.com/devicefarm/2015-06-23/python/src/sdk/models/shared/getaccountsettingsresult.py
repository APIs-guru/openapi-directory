from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetAccountSettingsResult:
    r"""GetAccountSettingsResult
    Represents the account settings return values from the <code>GetAccountSettings</code> request.
    """
    
    account_settings: Optional[AccountSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountSettings') }})
    
