from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListCustomRoutingPortMappingsRequest:
    accelerator_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceleratorArn' }})
    endpoint_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointGroupArn' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
