from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NeighborConnectionDetail:
    connections_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionsCount' }})
    destination_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationPort' }})
    destination_server_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationServerId' }})
    source_server_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceServerId' }})
    transport_protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transportProtocol' }})
    
