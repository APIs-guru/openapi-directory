from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import endpointgroup


@dataclass_json
@dataclass
class CreateEndpointGroupResponse:
    endpoint_group: Optional[endpointgroup.EndpointGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointGroup' }})
    
