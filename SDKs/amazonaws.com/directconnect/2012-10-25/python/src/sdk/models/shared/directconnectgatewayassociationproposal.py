from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DirectConnectGatewayAssociationProposal:
    r"""DirectConnectGatewayAssociationProposal
    Information about the proposal request to attach a virtual private gateway to a Direct Connect gateway. 
    """
    
    associated_gateway: Optional[AssociatedGateway] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedGateway') }})
    direct_connect_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayId') }})
    direct_connect_gateway_owner_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayOwnerAccount') }})
    existing_allowed_prefixes_to_direct_connect_gateway: Optional[List[RouteFilterPrefix]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('existingAllowedPrefixesToDirectConnectGateway') }})
    proposal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposalId') }})
    proposal_state: Optional[DirectConnectGatewayAssociationProposalStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposalState') }})
    requested_allowed_prefixes_to_direct_connect_gateway: Optional[List[RouteFilterPrefix]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedAllowedPrefixesToDirectConnectGateway') }})
    
