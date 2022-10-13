from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import groupedresourcecount


@dataclass_json
@dataclass
class GetAggregateDiscoveredResourceCountsResponse:
    group_by_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupByKey' }})
    grouped_resource_counts: Optional[List[groupedresourcecount.GroupedResourceCount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupedResourceCounts' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    total_discovered_resources: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalDiscoveredResources' }})
    
