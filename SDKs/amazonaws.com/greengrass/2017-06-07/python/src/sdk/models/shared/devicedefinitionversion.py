from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import device


@dataclass_json
@dataclass
class DeviceDefinitionVersion:
    devices: Optional[List[device.Device]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Devices' }})
    
