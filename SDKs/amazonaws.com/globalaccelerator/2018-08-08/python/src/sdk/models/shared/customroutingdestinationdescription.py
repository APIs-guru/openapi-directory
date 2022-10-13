from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import protocol_enum


@dataclass_json
@dataclass
class CustomRoutingDestinationDescription:
    from_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FromPort' }})
    protocols: Optional[List[protocol_enum.ProtocolEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocols' }})
    to_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ToPort' }})
    
