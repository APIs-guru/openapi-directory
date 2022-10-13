from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VirtualNodeRef:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    mesh_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshName' }})
    virtual_node_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualNodeName' }})
    
