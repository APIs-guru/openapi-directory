from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HostEntry:
    hostname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    ip_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddress' }})
    
