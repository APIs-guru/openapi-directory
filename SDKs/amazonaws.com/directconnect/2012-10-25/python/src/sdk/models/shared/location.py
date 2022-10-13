from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Location:
    available_mac_sec_port_speeds: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableMacSecPortSpeeds' }})
    available_port_speeds: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availablePortSpeeds' }})
    available_providers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableProviders' }})
    location_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationCode' }})
    location_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationName' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    
