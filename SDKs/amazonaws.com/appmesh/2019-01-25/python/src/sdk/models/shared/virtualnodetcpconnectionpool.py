from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VirtualNodeTCPConnectionPool:
    max_connections: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxConnections' }})
    
