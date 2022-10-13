from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateDirectConnectGatewayRequest:
    amazon_side_asn: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amazonSideAsn' }})
    direct_connect_gateway_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGatewayName' }})
    
