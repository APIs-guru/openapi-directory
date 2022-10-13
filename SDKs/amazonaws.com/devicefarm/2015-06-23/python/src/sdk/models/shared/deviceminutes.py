from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceMinutes:
    metered: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metered' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    unmetered: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unmetered' }})
    
