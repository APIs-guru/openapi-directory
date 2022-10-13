from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import devendpoint


@dataclass_json
@dataclass
class BatchGetDevEndpointsResponse:
    dev_endpoints: Optional[List[devendpoint.DevEndpoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DevEndpoints' }})
    dev_endpoints_not_found: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DevEndpointsNotFound' }})
    
