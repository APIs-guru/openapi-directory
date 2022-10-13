from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import routefilterprefix
from . import routefilterprefix


@dataclass_json
@dataclass
class CreateDirectConnectGatewayAssociationProposalRequest:
    add_allowed_prefixes_to_direct_connect_gateway: Optional[List[routefilterprefix.RouteFilterPrefix]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addAllowedPrefixesToDirectConnectGateway' }})
    direct_connect_gateway_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGatewayId' }})
    direct_connect_gateway_owner_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGatewayOwnerAccount' }})
    gateway_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gatewayId' }})
    remove_allowed_prefixes_to_direct_connect_gateway: Optional[List[routefilterprefix.RouteFilterPrefix]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removeAllowedPrefixesToDirectConnectGateway' }})
    
