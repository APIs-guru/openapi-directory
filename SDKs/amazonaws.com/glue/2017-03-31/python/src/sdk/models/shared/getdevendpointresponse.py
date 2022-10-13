from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import devendpoint


@dataclass_json
@dataclass
class GetDevEndpointResponse:
    dev_endpoint: Optional[devendpoint.DevEndpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DevEndpoint' }})
    
