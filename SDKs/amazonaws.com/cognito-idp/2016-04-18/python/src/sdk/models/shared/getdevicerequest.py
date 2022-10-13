from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetDeviceRequest:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessToken' }})
    device_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceKey' }})
    
