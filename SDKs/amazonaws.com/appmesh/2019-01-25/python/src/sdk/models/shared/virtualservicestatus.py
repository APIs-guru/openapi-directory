from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import virtualservicestatuscode_enum


@dataclass_json
@dataclass
class VirtualServiceStatus:
    status: virtualservicestatuscode_enum.VirtualServiceStatusCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
