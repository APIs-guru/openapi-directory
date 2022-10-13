from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import resourcemetadata
from . import virtualrouterspec
from . import virtualrouterstatus


@dataclass_json
@dataclass
class VirtualRouterData:
    mesh_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshName' }})
    metadata: resourcemetadata.ResourceMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    spec: virtualrouterspec.VirtualRouterSpec = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    status: virtualrouterstatus.VirtualRouterStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    virtual_router_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualRouterName' }})
    
