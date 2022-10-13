from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import clientaffinity_enum
from . import portrange
from . import protocol_enum


@dataclass_json
@dataclass
class Listener:
    client_affinity: Optional[clientaffinity_enum.ClientAffinityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientAffinity' }})
    listener_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListenerArn' }})
    port_ranges: Optional[List[portrange.PortRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortRanges' }})
    protocol: Optional[protocol_enum.ProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocol' }})
    
