from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AdminUserGlobalSignOutRequest:
    r"""AdminUserGlobalSignOutRequest
    The request to sign out of all devices, as an administrator.
    """
    
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
