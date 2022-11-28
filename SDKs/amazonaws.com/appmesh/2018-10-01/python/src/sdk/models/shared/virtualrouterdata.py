from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualRouterData:
    r"""VirtualRouterData
    An object representing a virtual router returned by a describe operation.
    """
    
    mesh_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshName') }})
    virtual_router_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualRouterName') }})
    metadata: Optional[ResourceMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: Optional[VirtualRouterSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    status: Optional[VirtualRouterStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
