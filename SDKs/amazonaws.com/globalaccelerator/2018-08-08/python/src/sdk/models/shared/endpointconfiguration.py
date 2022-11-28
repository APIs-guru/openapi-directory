from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EndpointConfiguration:
    r"""EndpointConfiguration
    A complex type for endpoints. A resource must be valid and active when you add it as an endpoint.
    """
    
    client_ip_preservation_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientIPPreservationEnabled') }})
    endpoint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointId') }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Weight') }})
    
