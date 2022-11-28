from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualGatewayListener:
    r"""VirtualGatewayListener
    An object that represents a listener for a virtual gateway.
    """
    
    port_mapping: VirtualGatewayPortMapping = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portMapping') }})
    connection_pool: Optional[VirtualGatewayConnectionPool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionPool') }})
    health_check: Optional[VirtualGatewayHealthCheckPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheck') }})
    tls: Optional[VirtualGatewayListenerTLS] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls') }})
    
