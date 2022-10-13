from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EndpointConfiguration:
    client_ip_preservation_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientIPPreservationEnabled' }})
    endpoint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointId' }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Weight' }})
    
