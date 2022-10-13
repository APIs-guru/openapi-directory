from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import virtualrouterdata


@dataclass_json
@dataclass
class UpdateVirtualRouterOutput:
    virtual_router: virtualrouterdata.VirtualRouterData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualRouter' }})
    
