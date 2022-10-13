from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import routestatuscode_enum


@dataclass_json
@dataclass
class RouteStatus:
    status: routestatuscode_enum.RouteStatusCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
