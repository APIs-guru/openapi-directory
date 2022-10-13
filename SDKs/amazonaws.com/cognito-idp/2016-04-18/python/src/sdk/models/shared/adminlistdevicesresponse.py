from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import devicetype


@dataclass_json
@dataclass
class AdminListDevicesResponse:
    devices: Optional[List[devicetype.DeviceType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Devices' }})
    pagination_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaginationToken' }})
    
