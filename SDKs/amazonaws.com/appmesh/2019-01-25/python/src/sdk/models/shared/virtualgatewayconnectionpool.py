from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import virtualgatewaygrpcconnectionpool
from . import virtualgatewayhttpconnectionpool
from . import virtualgatewayhttp2connectionpool


@dataclass_json
@dataclass
class VirtualGatewayConnectionPool:
    grpc: Optional[virtualgatewaygrpcconnectionpool.VirtualGatewayGrpcConnectionPool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grpc' }})
    http: Optional[virtualgatewayhttpconnectionpool.VirtualGatewayHTTPConnectionPool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http' }})
    http2: Optional[virtualgatewayhttp2connectionpool.VirtualGatewayHttp2ConnectionPool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http2' }})
    
