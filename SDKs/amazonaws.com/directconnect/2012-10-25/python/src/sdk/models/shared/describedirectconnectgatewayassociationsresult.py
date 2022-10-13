from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import directconnectgatewayassociation


@dataclass_json
@dataclass
class DescribeDirectConnectGatewayAssociationsResult:
    direct_connect_gateway_associations: Optional[List[directconnectgatewayassociation.DirectConnectGatewayAssociation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGatewayAssociations' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
