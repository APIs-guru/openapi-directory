from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import healthcheckprotocol_enum


@dataclass_json
@dataclass
class HealthCheckConfiguration:
    healthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthyThreshold' }})
    interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Interval' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    protocol: Optional[healthcheckprotocol_enum.HealthCheckProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocol' }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timeout' }})
    unhealthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnhealthyThreshold' }})
    
