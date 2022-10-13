from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import virtualrouterdata


@dataclass_json
@dataclass
class CreateVirtualRouterOutput:
    virtual_router: Optional[virtualrouterdata.VirtualRouterData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualRouter' }})
    
