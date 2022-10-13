from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deviceinstance


@dataclass_json
@dataclass
class ListDeviceInstancesResult:
    device_instances: Optional[List[deviceinstance.DeviceInstance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceInstances' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
