from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import devicetype


@dataclass_json
@dataclass
class AdminGetDeviceResponse:
    device: devicetype.DeviceType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Device' }})
    
