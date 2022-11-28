from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomRoutingEndpointDescription:
    r"""CustomRoutingEndpointDescription
    A complex type for an endpoint for a custom routing accelerator. Each endpoint group can include one or more endpoints, which are virtual private cloud (VPC) subnets.
    """
    
    endpoint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointId') }})
    
