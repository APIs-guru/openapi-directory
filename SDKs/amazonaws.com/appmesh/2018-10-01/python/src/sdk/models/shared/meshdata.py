from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MeshData:
    r"""MeshData
    An object representing a service mesh returned by a describe operation.
    """
    
    mesh_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshName') }})
    metadata: ResourceMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    status: Optional[MeshStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
