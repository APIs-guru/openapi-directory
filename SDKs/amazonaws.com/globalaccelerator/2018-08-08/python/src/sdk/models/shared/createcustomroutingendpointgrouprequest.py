from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateCustomRoutingEndpointGroupRequest:
    destination_configurations: List[CustomRoutingDestinationConfiguration] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationConfigurations') }})
    endpoint_group_region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroupRegion') }})
    idempotency_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    listener_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListenerArn') }})
    
