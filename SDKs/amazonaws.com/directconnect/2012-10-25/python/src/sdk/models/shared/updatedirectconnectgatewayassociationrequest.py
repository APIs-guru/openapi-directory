from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import routefilterprefix
from . import routefilterprefix


@dataclass_json
@dataclass
class UpdateDirectConnectGatewayAssociationRequest:
    add_allowed_prefixes_to_direct_connect_gateway: Optional[List[routefilterprefix.RouteFilterPrefix]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addAllowedPrefixesToDirectConnectGateway' }})
    association_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associationId' }})
    remove_allowed_prefixes_to_direct_connect_gateway: Optional[List[routefilterprefix.RouteFilterPrefix]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removeAllowedPrefixesToDirectConnectGateway' }})
    
