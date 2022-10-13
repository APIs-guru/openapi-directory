from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import headermatchmethod


@dataclass_json
@dataclass
class HTTPGatewayRouteHeader:
    invert: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invert' }})
    match: Optional[headermatchmethod.HeaderMatchMethod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'match' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
