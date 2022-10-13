from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListCustomRoutingPortMappingsByDestinationRequest:
    destination_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationAddress' }})
    endpoint_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointId' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
