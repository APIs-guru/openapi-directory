from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import route


@dataclass_json
@dataclass
class GetRoutesResponse:
    items: Optional[List[route.Route]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
