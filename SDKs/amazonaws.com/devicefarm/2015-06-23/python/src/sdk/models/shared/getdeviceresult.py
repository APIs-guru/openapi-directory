from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import device


@dataclass_json
@dataclass
class GetDeviceResult:
    device: Optional[device.Device] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    
