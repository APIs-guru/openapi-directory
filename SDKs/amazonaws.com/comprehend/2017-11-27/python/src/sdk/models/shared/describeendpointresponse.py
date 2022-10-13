from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import endpointproperties


@dataclass_json
@dataclass
class DescribeEndpointResponse:
    endpoint_properties: Optional[endpointproperties.EndpointProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointProperties' }})
    
