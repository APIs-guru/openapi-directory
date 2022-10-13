from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import routefilterprefix


@dataclass_json
@dataclass
class CreateDirectConnectGatewayAssociationRequest:
    add_allowed_prefixes_to_direct_connect_gateway: Optional[List[routefilterprefix.RouteFilterPrefix]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addAllowedPrefixesToDirectConnectGateway' }})
    direct_connect_gateway_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGatewayId' }})
    gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gatewayId' }})
    virtual_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualGatewayId' }})
    
