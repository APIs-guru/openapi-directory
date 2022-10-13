from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import devicepool


@dataclass_json
@dataclass
class ListDevicePoolsResult:
    device_pools: Optional[List[devicepool.DevicePool]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePools' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
