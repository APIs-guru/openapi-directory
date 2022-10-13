from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourcemetadata
from . import meshstatus


@dataclass_json
@dataclass
class MeshData:
    mesh_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshName' }})
    metadata: resourcemetadata.ResourceMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    status: Optional[meshstatus.MeshStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
