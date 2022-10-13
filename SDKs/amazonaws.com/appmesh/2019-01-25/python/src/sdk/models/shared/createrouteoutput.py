from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import routedata


@dataclass_json
@dataclass
class CreateRouteOutput:
    route: routedata.RouteData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'route' }})
    
