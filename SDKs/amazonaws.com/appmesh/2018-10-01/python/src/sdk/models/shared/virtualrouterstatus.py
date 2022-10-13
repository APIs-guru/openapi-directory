from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import virtualrouterstatuscode_enum


@dataclass_json
@dataclass
class VirtualRouterStatus:
    status: Optional[virtualrouterstatuscode_enum.VirtualRouterStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
