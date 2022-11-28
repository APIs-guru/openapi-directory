from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualNodeData:
    r"""VirtualNodeData
    An object that represents a virtual node returned by a describe operation.
    """
    
    mesh_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshName') }})
    metadata: ResourceMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: VirtualNodeSpec = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    status: VirtualNodeStatus = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    virtual_node_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualNodeName') }})
    
