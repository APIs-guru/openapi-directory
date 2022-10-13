from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConnectivityInfo:
    host_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HostAddress' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metadata' }})
    port_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortNumber' }})
    
