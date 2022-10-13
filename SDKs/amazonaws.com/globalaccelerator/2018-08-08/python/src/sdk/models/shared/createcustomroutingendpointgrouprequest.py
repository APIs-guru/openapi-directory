from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import customroutingdestinationconfiguration


@dataclass_json
@dataclass
class CreateCustomRoutingEndpointGroupRequest:
    destination_configurations: List[customroutingdestinationconfiguration.CustomRoutingDestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationConfigurations' }})
    endpoint_group_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointGroupRegion' }})
    idempotency_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdempotencyToken' }})
    listener_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListenerArn' }})
    
