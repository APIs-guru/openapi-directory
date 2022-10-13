from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dataflowendpoint
from . import securitydetails


@dataclass_json
@dataclass
class EndpointDetails:
    endpoint: Optional[dataflowendpoint.DataflowEndpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint' }})
    security_details: Optional[securitydetails.SecurityDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityDetails' }})
    
