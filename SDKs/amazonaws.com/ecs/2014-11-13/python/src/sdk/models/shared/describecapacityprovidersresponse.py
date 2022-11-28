from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeCapacityProvidersResponse:
    capacity_providers: Optional[List[CapacityProvider]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityProviders') }})
    failures: Optional[List[Failure]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failures') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
