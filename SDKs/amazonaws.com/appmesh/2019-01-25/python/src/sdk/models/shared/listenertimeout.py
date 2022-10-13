from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import grpctimeout
from . import httptimeout
from . import httptimeout
from . import tcptimeout


@dataclass_json
@dataclass
class ListenerTimeout:
    grpc: Optional[grpctimeout.GrpcTimeout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grpc' }})
    http: Optional[httptimeout.HTTPTimeout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http' }})
    http2: Optional[httptimeout.HTTPTimeout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http2' }})
    tcp: Optional[tcptimeout.TCPTimeout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tcp' }})
    
