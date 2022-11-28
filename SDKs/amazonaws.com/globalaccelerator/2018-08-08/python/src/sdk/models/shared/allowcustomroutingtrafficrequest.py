from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AllowCustomRoutingTrafficRequest:
    endpoint_group_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroupArn') }})
    endpoint_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointId') }})
    allow_all_traffic_to_endpoint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowAllTrafficToEndpoint') }})
    destination_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationAddresses') }})
    destination_ports: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationPorts') }})
    
