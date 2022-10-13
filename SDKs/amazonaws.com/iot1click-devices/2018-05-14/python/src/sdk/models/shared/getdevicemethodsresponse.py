from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import devicemethod


@dataclass_json
@dataclass
class GetDeviceMethodsResponse:
    device_methods: Optional[List[devicemethod.DeviceMethod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceMethods' }})
    
