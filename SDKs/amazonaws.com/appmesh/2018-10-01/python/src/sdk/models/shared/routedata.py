from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourcemetadata
from . import routespec
from . import routestatus


@dataclass_json
@dataclass
class RouteData:
    mesh_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshName' }})
    metadata: Optional[resourcemetadata.ResourceMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    route_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeName' }})
    spec: Optional[routespec.RouteSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    status: Optional[routestatus.RouteStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    virtual_router_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualRouterName' }})
    
