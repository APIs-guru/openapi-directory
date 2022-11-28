from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ForgetDeviceRequest:
    r"""ForgetDeviceRequest
    Represents the request to forget the device.
    """
    
    device_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceKey') }})
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    
