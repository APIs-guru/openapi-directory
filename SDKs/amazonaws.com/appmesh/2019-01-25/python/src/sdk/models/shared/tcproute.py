from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tcprouteaction
from . import tcptimeout


@dataclass_json
@dataclass
class TCPRoute:
    action: tcprouteaction.TCPRouteAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    timeout: Optional[tcptimeout.TCPTimeout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    
