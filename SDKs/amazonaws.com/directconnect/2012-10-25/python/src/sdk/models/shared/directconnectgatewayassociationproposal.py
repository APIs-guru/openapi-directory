from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import associatedgateway
from . import routefilterprefix
from . import directconnectgatewayassociationproposalstate_enum
from . import routefilterprefix


@dataclass_json
@dataclass
class DirectConnectGatewayAssociationProposal:
    associated_gateway: Optional[associatedgateway.AssociatedGateway] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associatedGateway' }})
    direct_connect_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGatewayId' }})
    direct_connect_gateway_owner_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGatewayOwnerAccount' }})
    existing_allowed_prefixes_to_direct_connect_gateway: Optional[List[routefilterprefix.RouteFilterPrefix]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'existingAllowedPrefixesToDirectConnectGateway' }})
    proposal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proposalId' }})
    proposal_state: Optional[directconnectgatewayassociationproposalstate_enum.DirectConnectGatewayAssociationProposalStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proposalState' }})
    requested_allowed_prefixes_to_direct_connect_gateway: Optional[List[routefilterprefix.RouteFilterPrefix]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedAllowedPrefixesToDirectConnectGateway' }})
    
