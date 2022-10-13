from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import capacityprovider
from . import failure


@dataclass_json
@dataclass
class DescribeCapacityProvidersResponse:
    capacity_providers: Optional[List[capacityprovider.CapacityProvider]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacityProviders' }})
    failures: Optional[List[failure.Failure]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failures' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
