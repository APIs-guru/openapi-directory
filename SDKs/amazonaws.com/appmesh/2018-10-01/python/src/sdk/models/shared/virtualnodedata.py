from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourcemetadata
from . import virtualnodespec
from . import virtualnodestatus


@dataclass_json
@dataclass
class VirtualNodeData:
    mesh_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshName' }})
    metadata: Optional[resourcemetadata.ResourceMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    spec: Optional[virtualnodespec.VirtualNodeSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    status: Optional[virtualnodestatus.VirtualNodeStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    virtual_node_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualNodeName' }})
    
