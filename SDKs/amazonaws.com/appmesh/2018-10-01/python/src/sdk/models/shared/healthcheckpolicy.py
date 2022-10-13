from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import portprotocol_enum


@dataclass_json
@dataclass
class HealthCheckPolicy:
    healthy_threshold: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthyThreshold' }})
    interval_millis: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intervalMillis' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: portprotocol_enum.PortProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    timeout_millis: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutMillis' }})
    unhealthy_threshold: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unhealthyThreshold' }})
    
