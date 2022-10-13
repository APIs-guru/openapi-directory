from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListDevEndpointsResponse:
    dev_endpoint_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DevEndpointNames' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
