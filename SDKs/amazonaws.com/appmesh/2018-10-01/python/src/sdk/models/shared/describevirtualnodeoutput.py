from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import virtualnodedata


@dataclass_json
@dataclass
class DescribeVirtualNodeOutput:
    virtual_node: Optional[virtualnodedata.VirtualNodeData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualNode' }})
    
