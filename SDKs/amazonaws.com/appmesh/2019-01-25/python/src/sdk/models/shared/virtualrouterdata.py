from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualRouterData:
    r"""VirtualRouterData
    An object that represents a virtual router returned by a describe operation.
    """
    
    mesh_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshName') }})
    metadata: ResourceMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: VirtualRouterSpec = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    status: VirtualRouterStatus = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    virtual_router_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualRouterName') }})
    
