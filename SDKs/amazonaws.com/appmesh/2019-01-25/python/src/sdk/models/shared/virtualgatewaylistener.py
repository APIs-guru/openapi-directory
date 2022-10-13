from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import virtualgatewayconnectionpool
from . import virtualgatewayhealthcheckpolicy
from . import virtualgatewayportmapping
from . import virtualgatewaylistenertls


@dataclass_json
@dataclass
class VirtualGatewayListener:
    connection_pool: Optional[virtualgatewayconnectionpool.VirtualGatewayConnectionPool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionPool' }})
    health_check: Optional[virtualgatewayhealthcheckpolicy.VirtualGatewayHealthCheckPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthCheck' }})
    port_mapping: virtualgatewayportmapping.VirtualGatewayPortMapping = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portMapping' }})
    tls: Optional[virtualgatewaylistenertls.VirtualGatewayListenerTLS] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tls' }})
    
