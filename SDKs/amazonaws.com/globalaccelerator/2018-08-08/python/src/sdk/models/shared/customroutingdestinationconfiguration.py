from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import customroutingprotocol_enum


@dataclass_json
@dataclass
class CustomRoutingDestinationConfiguration:
    from_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FromPort' }})
    protocols: List[customroutingprotocol_enum.CustomRoutingProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocols' }})
    to_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ToPort' }})
    
