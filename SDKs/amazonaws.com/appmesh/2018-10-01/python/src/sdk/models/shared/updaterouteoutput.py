from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import routedata


@dataclass_json
@dataclass
class UpdateRouteOutput:
    route: Optional[routedata.RouteData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'route' }})
    
