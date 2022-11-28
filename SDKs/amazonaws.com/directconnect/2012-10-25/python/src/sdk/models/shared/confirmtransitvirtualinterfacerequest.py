from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConfirmTransitVirtualInterfaceRequest:
    direct_connect_gateway_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayId') }})
    virtual_interface_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceId') }})
    
