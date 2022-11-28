from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VirtualGateway:
    r"""VirtualGateway
    Information about a virtual private gateway for a private virtual interface.
    """
    
    virtual_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualGatewayId') }})
    virtual_gateway_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualGatewayState') }})
    
