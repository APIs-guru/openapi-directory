from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourcecount


@dataclass_json
@dataclass
class GetDiscoveredResourceCountsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    resource_counts: Optional[List[resourcecount.ResourceCount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceCounts' }})
    total_discovered_resources: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalDiscoveredResources' }})
    
