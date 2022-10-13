from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import devicefilter


@dataclass_json
@dataclass
class DeviceSelectionConfiguration:
    filters: List[devicefilter.DeviceFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    max_devices: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDevices' }})
    
