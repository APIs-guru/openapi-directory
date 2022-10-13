from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import portprotocol_enum


@dataclass_json
@dataclass
class PortMapping:
    port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: portprotocol_enum.PortProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    
