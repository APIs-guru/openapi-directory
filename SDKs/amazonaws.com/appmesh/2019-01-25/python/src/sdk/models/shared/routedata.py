from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import resourcemetadata
from . import routespec
from . import routestatus


@dataclass_json
@dataclass
class RouteData:
    mesh_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshName' }})
    metadata: resourcemetadata.ResourceMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    route_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeName' }})
    spec: routespec.RouteSpec = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    status: routestatus.RouteStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    virtual_router_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualRouterName' }})
    
