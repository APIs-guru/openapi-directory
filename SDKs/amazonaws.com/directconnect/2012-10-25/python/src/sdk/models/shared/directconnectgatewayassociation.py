from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DirectConnectGatewayAssociation:
    r"""DirectConnectGatewayAssociation
    Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.
    """
    
    allowed_prefixes_to_direct_connect_gateway: Optional[List[RouteFilterPrefix]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedPrefixesToDirectConnectGateway') }})
    associated_gateway: Optional[AssociatedGateway] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedGateway') }})
    association_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associationId') }})
    association_state: Optional[DirectConnectGatewayAssociationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associationState') }})
    direct_connect_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayId') }})
    direct_connect_gateway_owner_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayOwnerAccount') }})
    state_change_error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateChangeError') }})
    virtual_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualGatewayId') }})
    virtual_gateway_owner_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualGatewayOwnerAccount') }})
    virtual_gateway_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualGatewayRegion') }})
    
