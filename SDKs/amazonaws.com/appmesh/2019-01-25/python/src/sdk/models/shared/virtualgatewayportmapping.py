from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import virtualgatewayportprotocol_enum


@dataclass_json
@dataclass
class VirtualGatewayPortMapping:
    port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: virtualgatewayportprotocol_enum.VirtualGatewayPortProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    
