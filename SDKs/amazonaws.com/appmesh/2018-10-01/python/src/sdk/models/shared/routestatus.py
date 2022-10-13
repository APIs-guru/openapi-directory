from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import routestatuscode_enum


@dataclass_json
@dataclass
class RouteStatus:
    status: Optional[routestatuscode_enum.RouteStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
