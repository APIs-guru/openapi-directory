from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AdminForgetDeviceRequest:
    r"""AdminForgetDeviceRequest
    Sends the forgot device request, as an administrator.
    """
    
    device_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceKey') }})
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
