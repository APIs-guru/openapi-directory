from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ThingConnectivity:
    connected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connected' }})
    disconnect_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disconnectReason' }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    
