from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RouteSpec:
    r"""RouteSpec
    An object that represents a route specification. Specify one route type.
    """
    
    grpc_route: Optional[GrpcRoute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpcRoute') }})
    http2_route: Optional[HTTPRoute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http2Route') }})
    http_route: Optional[HTTPRoute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpRoute') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    tcp_route: Optional[TCPRoute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tcpRoute') }})
    
