from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import virtualnodeserviceprovider
from . import virtualrouterserviceprovider


@dataclass_json
@dataclass
class VirtualServiceProvider:
    virtual_node: Optional[virtualnodeserviceprovider.VirtualNodeServiceProvider] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualNode' }})
    virtual_router: Optional[virtualrouterserviceprovider.VirtualRouterServiceProvider] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualRouter' }})
    
