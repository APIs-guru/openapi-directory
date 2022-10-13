from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import resourcemetadata
from . import meshspec
from . import meshstatus


@dataclass_json
@dataclass
class MeshData:
    mesh_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshName' }})
    metadata: resourcemetadata.ResourceMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    spec: meshspec.MeshSpec = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    status: meshstatus.MeshStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
