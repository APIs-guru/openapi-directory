from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourcemetadata
from . import virtualrouterspec
from . import virtualrouterstatus


@dataclass_json
@dataclass
class VirtualRouterData:
    mesh_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshName' }})
    metadata: Optional[resourcemetadata.ResourceMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    spec: Optional[virtualrouterspec.VirtualRouterSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    status: Optional[virtualrouterstatus.VirtualRouterStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    virtual_router_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualRouterName' }})
    
