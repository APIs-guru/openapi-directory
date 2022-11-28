from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MeshRef:
    r"""MeshRef
    An object representing a service mesh returned by a list operation.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    mesh_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshName') }})
    
