from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import routefilterprefix
from . import associatedgateway
from . import directconnectgatewayassociationstate_enum


@dataclass_json
@dataclass
class DirectConnectGatewayAssociation:
    allowed_prefixes_to_direct_connect_gateway: Optional[List[routefilterprefix.RouteFilterPrefix]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedPrefixesToDirectConnectGateway' }})
    associated_gateway: Optional[associatedgateway.AssociatedGateway] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associatedGateway' }})
    association_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associationId' }})
    association_state: Optional[directconnectgatewayassociationstate_enum.DirectConnectGatewayAssociationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associationState' }})
    direct_connect_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGatewayId' }})
    direct_connect_gateway_owner_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGatewayOwnerAccount' }})
    state_change_error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateChangeError' }})
    virtual_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualGatewayId' }})
    virtual_gateway_owner_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualGatewayOwnerAccount' }})
    virtual_gateway_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualGatewayRegion' }})
    
