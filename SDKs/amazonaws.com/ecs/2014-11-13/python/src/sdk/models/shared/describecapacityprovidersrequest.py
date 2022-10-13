from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import capacityproviderfield_enum


@dataclass_json
@dataclass
class DescribeCapacityProvidersRequest:
    capacity_providers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacityProviders' }})
    include: Optional[List[capacityproviderfield_enum.CapacityProviderFieldEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
