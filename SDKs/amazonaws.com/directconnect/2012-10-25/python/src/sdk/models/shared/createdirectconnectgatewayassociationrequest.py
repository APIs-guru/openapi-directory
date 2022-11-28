from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDirectConnectGatewayAssociationRequest:
    direct_connect_gateway_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayId') }})
    add_allowed_prefixes_to_direct_connect_gateway: Optional[List[RouteFilterPrefix]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addAllowedPrefixesToDirectConnectGateway') }})
    gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayId') }})
    virtual_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualGatewayId') }})
    
