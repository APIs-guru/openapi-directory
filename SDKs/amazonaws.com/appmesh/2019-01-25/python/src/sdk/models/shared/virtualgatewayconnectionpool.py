from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualGatewayConnectionPool:
    r"""VirtualGatewayConnectionPool
    <p>An object that represents the type of virtual gateway connection pool.</p> <p>Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.</p> <p>If not present the default value for <code>maxPendingRequests</code> is <code>2147483647</code>.</p>
    """
    
    grpc: Optional[VirtualGatewayGrpcConnectionPool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpc') }})
    http: Optional[VirtualGatewayHTTPConnectionPool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    http2: Optional[VirtualGatewayHttp2ConnectionPool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http2') }})
    
