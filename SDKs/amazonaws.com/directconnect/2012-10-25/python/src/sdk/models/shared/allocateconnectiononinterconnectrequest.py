from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AllocateConnectionOnInterconnectRequest:
    bandwidth: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidth' }})
    connection_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionName' }})
    interconnect_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interconnectId' }})
    owner_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerAccount' }})
    vlan: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan' }})
    
