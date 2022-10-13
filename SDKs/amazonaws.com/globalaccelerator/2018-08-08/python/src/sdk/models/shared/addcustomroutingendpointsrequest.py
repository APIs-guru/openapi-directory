from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import customroutingendpointconfiguration


@dataclass_json
@dataclass
class AddCustomRoutingEndpointsRequest:
    endpoint_configurations: List[customroutingendpointconfiguration.CustomRoutingEndpointConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointConfigurations' }})
    endpoint_group_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointGroupArn' }})
    
