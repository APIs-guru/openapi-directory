from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetDevEndpointsResponse:
    dev_endpoints: Optional[List[DevEndpoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DevEndpoints') }})
    dev_endpoints_not_found: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DevEndpointsNotFound') }})
    
