from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConfirmPrivateVirtualInterfaceRequest:
    virtual_interface_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceId') }})
    direct_connect_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayId') }})
    virtual_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualGatewayId') }})
    
