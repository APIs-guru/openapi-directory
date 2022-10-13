from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import ipprotocol_enum


@dataclass_json
@dataclass
class IPPermission:
    from_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FromPort' }})
    ip_range: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpRange' }})
    protocol: ipprotocol_enum.IPProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocol' }})
    to_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ToPort' }})
    
