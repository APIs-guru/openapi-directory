from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import virtualnoderef


@dataclass_json
@dataclass
class ListVirtualNodesOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    virtual_nodes: List[virtualnoderef.VirtualNodeRef] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualNodes' }})
    
