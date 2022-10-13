from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import meshref


@dataclass_json
@dataclass
class ListMeshesOutput:
    meshes: List[meshref.MeshRef] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshes' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
