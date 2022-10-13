from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import resourcemetadata
from . import virtualnodespec
from . import virtualnodestatus


@dataclass_json
@dataclass
class VirtualNodeData:
    mesh_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshName' }})
    metadata: resourcemetadata.ResourceMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    spec: virtualnodespec.VirtualNodeSpec = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    status: virtualnodestatus.VirtualNodeStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    virtual_node_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualNodeName' }})
    
