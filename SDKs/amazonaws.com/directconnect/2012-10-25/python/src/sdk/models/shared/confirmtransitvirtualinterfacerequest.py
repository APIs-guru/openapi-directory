from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConfirmTransitVirtualInterfaceRequest:
    direct_connect_gateway_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGatewayId' }})
    virtual_interface_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualInterfaceId' }})
    
