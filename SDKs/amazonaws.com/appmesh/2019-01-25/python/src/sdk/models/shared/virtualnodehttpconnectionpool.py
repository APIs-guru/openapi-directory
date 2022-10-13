from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VirtualNodeHTTPConnectionPool:
    max_connections: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxConnections' }})
    max_pending_requests: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxPendingRequests' }})
    
