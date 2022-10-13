from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import endpoint


@dataclass_json
@dataclass
class DeleteEndpointResponse:
    endpoint: Optional[endpoint.Endpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Endpoint' }})
    
