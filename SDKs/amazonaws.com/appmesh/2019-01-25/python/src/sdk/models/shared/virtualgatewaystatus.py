from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import virtualgatewaystatuscode_enum


@dataclass_json
@dataclass
class VirtualGatewayStatus:
    status: virtualgatewaystatuscode_enum.VirtualGatewayStatusCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
