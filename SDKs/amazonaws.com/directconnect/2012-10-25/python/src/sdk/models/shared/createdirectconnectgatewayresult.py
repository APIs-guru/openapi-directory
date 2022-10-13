from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import directconnectgateway


@dataclass_json
@dataclass
class CreateDirectConnectGatewayResult:
    direct_connect_gateway: Optional[directconnectgateway.DirectConnectGateway] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGateway' }})
    
