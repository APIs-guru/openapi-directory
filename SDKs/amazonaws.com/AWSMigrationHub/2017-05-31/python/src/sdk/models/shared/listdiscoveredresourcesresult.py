from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import discoveredresource


@dataclass_json
@dataclass
class ListDiscoveredResourcesResult:
    discovered_resource_list: Optional[List[discoveredresource.DiscoveredResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DiscoveredResourceList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
