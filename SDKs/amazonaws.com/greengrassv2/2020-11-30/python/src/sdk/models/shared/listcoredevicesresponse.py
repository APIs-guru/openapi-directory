from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import coredevice


@dataclass_json
@dataclass
class ListCoreDevicesResponse:
    core_devices: Optional[List[coredevice.CoreDevice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coreDevices' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
