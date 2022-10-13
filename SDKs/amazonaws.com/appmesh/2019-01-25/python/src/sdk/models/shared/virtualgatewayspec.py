from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import virtualgatewaybackenddefaults
from . import virtualgatewaylistener
from . import virtualgatewaylogging


@dataclass_json
@dataclass
class VirtualGatewaySpec:
    backend_defaults: Optional[virtualgatewaybackenddefaults.VirtualGatewayBackendDefaults] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backendDefaults' }})
    listeners: List[virtualgatewaylistener.VirtualGatewayListener] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listeners' }})
    logging: Optional[virtualgatewaylogging.VirtualGatewayLogging] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logging' }})
    
