from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VirtualNodeHTTPConnectionPool:
    r"""VirtualNodeHTTPConnectionPool
    An object that represents a type of connection pool.
    """
    
    max_connections: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxConnections') }})
    max_pending_requests: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxPendingRequests') }})
    
