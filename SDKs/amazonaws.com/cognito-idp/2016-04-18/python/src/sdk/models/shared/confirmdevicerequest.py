from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import devicesecretverifierconfigtype


@dataclass_json
@dataclass
class ConfirmDeviceRequest:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessToken' }})
    device_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceKey' }})
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceName' }})
    device_secret_verifier_config: Optional[devicesecretverifierconfigtype.DeviceSecretVerifierConfigType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceSecretVerifierConfig' }})
    
