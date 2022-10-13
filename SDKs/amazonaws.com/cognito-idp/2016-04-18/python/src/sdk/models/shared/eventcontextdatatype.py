from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EventContextDataType:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'City' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceName' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpAddress' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timezone' }})
    
