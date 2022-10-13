from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deviceinstance


@dataclass_json
@dataclass
class GetDeviceInstanceResult:
    device_instance: Optional[deviceinstance.DeviceInstance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceInstance' }})
    
