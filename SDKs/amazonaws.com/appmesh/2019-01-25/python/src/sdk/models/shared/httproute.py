from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import httprouteaction
from . import httproutematch
from . import httpretrypolicy
from . import httptimeout


@dataclass_json
@dataclass
class HTTPRoute:
    action: httprouteaction.HTTPRouteAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    match: httproutematch.HTTPRouteMatch = field(default=None, metadata={'dataclasses_json': { 'field_name': 'match' }})
    retry_policy: Optional[httpretrypolicy.HTTPRetryPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryPolicy' }})
    timeout: Optional[httptimeout.HTTPTimeout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    
