from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import meshdata


@dataclass_json
@dataclass
class DescribeMeshOutput:
    mesh: Optional[meshdata.MeshData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mesh' }})
    
