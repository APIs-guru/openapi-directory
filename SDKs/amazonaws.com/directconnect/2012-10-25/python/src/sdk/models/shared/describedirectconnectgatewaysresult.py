from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import directconnectgateway


@dataclass_json
@dataclass
class DescribeDirectConnectGatewaysResult:
    direct_connect_gateways: Optional[List[directconnectgateway.DirectConnectGateway]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGateways' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
