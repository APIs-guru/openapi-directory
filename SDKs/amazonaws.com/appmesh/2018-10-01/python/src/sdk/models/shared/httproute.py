from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import httprouteaction
from . import httproutematch


@dataclass_json
@dataclass
class HTTPRoute:
    action: Optional[httprouteaction.HTTPRouteAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    match: Optional[httproutematch.HTTPRouteMatch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'match' }})
    
