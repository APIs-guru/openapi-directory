from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import healthstate_enum


@dataclass_json
@dataclass
class EndpointDescription:
    client_ip_preservation_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientIPPreservationEnabled' }})
    endpoint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointId' }})
    health_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthReason' }})
    health_state: Optional[healthstate_enum.HealthStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthState' }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Weight' }})
    
