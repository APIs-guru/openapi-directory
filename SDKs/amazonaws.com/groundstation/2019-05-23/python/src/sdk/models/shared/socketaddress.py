from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SocketAddress:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    
