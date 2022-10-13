from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import clientaffinity_enum
from . import portrange
from . import protocol_enum


@dataclass_json
@dataclass
class CreateListenerRequest:
    accelerator_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceleratorArn' }})
    client_affinity: Optional[clientaffinity_enum.ClientAffinityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientAffinity' }})
    idempotency_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdempotencyToken' }})
    port_ranges: List[portrange.PortRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortRanges' }})
    protocol: protocol_enum.ProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocol' }})
    
