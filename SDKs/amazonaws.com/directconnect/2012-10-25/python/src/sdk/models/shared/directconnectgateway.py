from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import directconnectgatewaystate_enum


@dataclass_json
@dataclass
class DirectConnectGateway:
    amazon_side_asn: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amazonSideAsn' }})
    direct_connect_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGatewayId' }})
    direct_connect_gateway_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGatewayName' }})
    direct_connect_gateway_state: Optional[directconnectgatewaystate_enum.DirectConnectGatewayStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGatewayState' }})
    owner_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerAccount' }})
    state_change_error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateChangeError' }})
    
