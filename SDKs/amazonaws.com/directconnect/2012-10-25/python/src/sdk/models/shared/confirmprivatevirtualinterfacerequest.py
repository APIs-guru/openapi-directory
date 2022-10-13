from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConfirmPrivateVirtualInterfaceRequest:
    direct_connect_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGatewayId' }})
    virtual_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualGatewayId' }})
    virtual_interface_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualInterfaceId' }})
    
