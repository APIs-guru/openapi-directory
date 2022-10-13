from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import virtualrouterref


@dataclass_json
@dataclass
class ListVirtualRoutersOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    virtual_routers: List[virtualrouterref.VirtualRouterRef] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualRouters' }})
    
