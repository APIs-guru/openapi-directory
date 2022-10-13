from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import devicepool


@dataclass_json
@dataclass
class UpdateDevicePoolResult:
    device_pool: Optional[devicepool.DevicePool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePool' }})
    
