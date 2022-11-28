from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GrpcGatewayRouteMatch:
    r"""GrpcGatewayRouteMatch
    An object that represents the criteria for determining a request match.
    """
    
    hostname: Optional[GatewayRouteHostnameMatch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    metadata: Optional[List[GrpcGatewayRouteMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    
