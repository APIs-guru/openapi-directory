from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import devicefilter


@dataclass_json
@dataclass
class DeviceSelectionResult:
    filters: Optional[List[devicefilter.DeviceFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    matched_devices_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchedDevicesCount' }})
    max_devices: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDevices' }})
    
