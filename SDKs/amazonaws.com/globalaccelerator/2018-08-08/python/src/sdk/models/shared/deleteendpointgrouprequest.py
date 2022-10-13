from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteEndpointGroupRequest:
    endpoint_group_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointGroupArn' }})
    
