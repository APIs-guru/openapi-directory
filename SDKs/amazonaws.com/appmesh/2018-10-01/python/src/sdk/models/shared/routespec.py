from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import httproute


@dataclass_json
@dataclass
class RouteSpec:
    http_route: Optional[httproute.HTTPRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpRoute' }})
    
