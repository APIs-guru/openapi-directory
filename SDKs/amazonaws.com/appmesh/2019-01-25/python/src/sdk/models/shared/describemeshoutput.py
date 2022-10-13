from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import meshdata


@dataclass_json
@dataclass
class DescribeMeshOutput:
    mesh: meshdata.MeshData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mesh' }})
    
