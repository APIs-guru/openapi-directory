from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EndpointDescription:
    r"""EndpointDescription
    A complex type for an endpoint. Each endpoint group can include one or more endpoints, such as load balancers.
    """
    
    client_ip_preservation_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientIPPreservationEnabled') }})
    endpoint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointId') }})
    health_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthReason') }})
    health_state: Optional[HealthStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthState') }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Weight') }})
    
