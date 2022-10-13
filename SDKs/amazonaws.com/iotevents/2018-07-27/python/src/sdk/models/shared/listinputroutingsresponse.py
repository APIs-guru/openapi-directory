from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import routedresource


@dataclass_json
@dataclass
class ListInputRoutingsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    routed_resources: Optional[List[routedresource.RoutedResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routedResources' }})
    
