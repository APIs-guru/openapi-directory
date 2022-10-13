from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AllowCustomRoutingTrafficRequest:
    allow_all_traffic_to_endpoint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowAllTrafficToEndpoint' }})
    destination_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationAddresses' }})
    destination_ports: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationPorts' }})
    endpoint_group_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointGroupArn' }})
    endpoint_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointId' }})
    
