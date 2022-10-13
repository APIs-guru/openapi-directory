from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import grpcrouteaction
from . import grpcroutematch
from . import grpcretrypolicy
from . import grpctimeout


@dataclass_json
@dataclass
class GrpcRoute:
    action: grpcrouteaction.GrpcRouteAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    match: grpcroutematch.GrpcRouteMatch = field(default=None, metadata={'dataclasses_json': { 'field_name': 'match' }})
    retry_policy: Optional[grpcretrypolicy.GrpcRetryPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryPolicy' }})
    timeout: Optional[grpctimeout.GrpcTimeout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    
