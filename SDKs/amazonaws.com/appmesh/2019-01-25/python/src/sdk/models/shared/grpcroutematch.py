from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GrpcRouteMatch:
    r"""GrpcRouteMatch
    An object that represents the criteria for determining a request match.
    """
    
    metadata: Optional[List[GrpcRouteMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    method_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methodName') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    
