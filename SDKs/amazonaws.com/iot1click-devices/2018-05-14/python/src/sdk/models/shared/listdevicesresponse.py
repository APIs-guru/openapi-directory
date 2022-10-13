from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import devicedescription


@dataclass_json
@dataclass
class ListDevicesResponse:
    devices: Optional[List[devicedescription.DeviceDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Devices' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
