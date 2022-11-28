from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DirectConnectGateway:
    r"""DirectConnectGateway
    Information about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateway or transit gateways.
    """
    
    amazon_side_asn: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amazonSideAsn') }})
    direct_connect_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayId') }})
    direct_connect_gateway_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayName') }})
    direct_connect_gateway_state: Optional[DirectConnectGatewayStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayState') }})
    owner_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerAccount') }})
    state_change_error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateChangeError') }})
    
