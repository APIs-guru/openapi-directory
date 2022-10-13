from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import routeref


@dataclass_json
@dataclass
class ListRoutesOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    routes: List[routeref.RouteRef] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routes' }})
    
