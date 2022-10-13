from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import devicerememberedstatustype_enum


@dataclass_json
@dataclass
class AdminUpdateDeviceStatusRequest:
    device_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceKey' }})
    device_remembered_status: Optional[devicerememberedstatustype_enum.DeviceRememberedStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceRememberedStatus' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    
