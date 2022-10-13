from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import resourcemetadata
from . import virtualgatewayspec
from . import virtualgatewaystatus


@dataclass_json
@dataclass
class VirtualGatewayData:
    mesh_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshName' }})
    metadata: resourcemetadata.ResourceMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    spec: virtualgatewayspec.VirtualGatewaySpec = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    status: virtualgatewaystatus.VirtualGatewayStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    virtual_gateway_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualGatewayName' }})
    
