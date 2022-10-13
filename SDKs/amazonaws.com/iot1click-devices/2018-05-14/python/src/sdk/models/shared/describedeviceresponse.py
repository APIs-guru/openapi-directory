from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import devicedescription


@dataclass_json
@dataclass
class DescribeDeviceResponse:
    device_description: Optional[devicedescription.DeviceDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceDescription' }})
    
