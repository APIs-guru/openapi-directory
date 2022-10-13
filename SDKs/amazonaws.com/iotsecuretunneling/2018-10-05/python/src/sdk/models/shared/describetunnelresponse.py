from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tunnel


@dataclass_json
@dataclass
class DescribeTunnelResponse:
    tunnel: Optional[tunnel.Tunnel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tunnel' }})
    
