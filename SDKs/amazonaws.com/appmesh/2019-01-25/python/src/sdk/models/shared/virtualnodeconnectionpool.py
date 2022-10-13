from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import virtualnodegrpcconnectionpool
from . import virtualnodehttpconnectionpool
from . import virtualnodehttp2connectionpool
from . import virtualnodetcpconnectionpool


@dataclass_json
@dataclass
class VirtualNodeConnectionPool:
    grpc: Optional[virtualnodegrpcconnectionpool.VirtualNodeGrpcConnectionPool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grpc' }})
    http: Optional[virtualnodehttpconnectionpool.VirtualNodeHTTPConnectionPool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http' }})
    http2: Optional[virtualnodehttp2connectionpool.VirtualNodeHttp2ConnectionPool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http2' }})
    tcp: Optional[virtualnodetcpconnectionpool.VirtualNodeTCPConnectionPool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tcp' }})
    
