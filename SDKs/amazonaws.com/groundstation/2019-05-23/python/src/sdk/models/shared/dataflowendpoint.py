from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import socketaddress
from . import endpointstatus_enum


@dataclass_json
@dataclass
class DataflowEndpoint:
    address: Optional[socketaddress.SocketAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    mtu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mtu' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[endpointstatus_enum.EndpointStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
