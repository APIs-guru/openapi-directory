from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import virtualnodedata


@dataclass_json
@dataclass
class DeleteVirtualNodeOutput:
    virtual_node: virtualnodedata.VirtualNodeData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualNode' }})
    
