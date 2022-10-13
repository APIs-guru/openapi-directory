from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import transportprotocol_enum


@dataclass_json
@dataclass
class NetworkBinding:
    bind_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bindIP' }})
    container_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerPort' }})
    host_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostPort' }})
    protocol: Optional[transportprotocol_enum.TransportProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    
