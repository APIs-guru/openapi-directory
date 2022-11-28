from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VirtualNodeRef:
    r"""VirtualNodeRef
    An object representing a virtual node returned by a list operation.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    mesh_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshName') }})
    virtual_node_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualNodeName') }})
    
