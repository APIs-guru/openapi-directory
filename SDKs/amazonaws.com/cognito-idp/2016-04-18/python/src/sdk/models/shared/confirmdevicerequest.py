from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfirmDeviceRequest:
    r"""ConfirmDeviceRequest
    Confirms the device request.
    """
    
    access_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    device_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceKey') }})
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceName') }})
    device_secret_verifier_config: Optional[DeviceSecretVerifierConfigType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceSecretVerifierConfig') }})
    
