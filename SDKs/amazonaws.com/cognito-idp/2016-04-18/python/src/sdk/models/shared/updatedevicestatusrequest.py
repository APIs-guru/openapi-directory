from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import devicerememberedstatustype_enum


@dataclass_json
@dataclass
class UpdateDeviceStatusRequest:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessToken' }})
    device_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceKey' }})
    device_remembered_status: Optional[devicerememberedstatustype_enum.DeviceRememberedStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceRememberedStatus' }})
    
