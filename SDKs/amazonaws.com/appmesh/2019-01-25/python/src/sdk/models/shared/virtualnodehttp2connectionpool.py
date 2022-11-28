from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VirtualNodeHttp2ConnectionPool:
    r"""VirtualNodeHttp2ConnectionPool
    An object that represents a type of connection pool.
    """
    
    max_requests: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRequests') }})
    
