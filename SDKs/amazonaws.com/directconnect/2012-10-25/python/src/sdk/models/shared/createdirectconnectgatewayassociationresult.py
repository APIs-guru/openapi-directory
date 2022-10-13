from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import directconnectgatewayassociation


@dataclass_json
@dataclass
class CreateDirectConnectGatewayAssociationResult:
    direct_connect_gateway_association: Optional[directconnectgatewayassociation.DirectConnectGatewayAssociation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGatewayAssociation' }})
    
