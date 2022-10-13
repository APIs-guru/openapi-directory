from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import meshstatuscode_enum


@dataclass_json
@dataclass
class MeshStatus:
    status: Optional[meshstatuscode_enum.MeshStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
