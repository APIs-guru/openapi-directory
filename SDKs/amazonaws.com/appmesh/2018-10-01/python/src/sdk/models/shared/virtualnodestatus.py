from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import virtualnodestatuscode_enum


@dataclass_json
@dataclass
class VirtualNodeStatus:
    status: Optional[virtualnodestatuscode_enum.VirtualNodeStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
