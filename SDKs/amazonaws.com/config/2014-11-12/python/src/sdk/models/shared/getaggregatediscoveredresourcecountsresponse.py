from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetAggregateDiscoveredResourceCountsResponse:
    total_discovered_resources: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalDiscoveredResources') }})
    group_by_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupByKey') }})
    grouped_resource_counts: Optional[List[GroupedResourceCount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupedResourceCounts') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
