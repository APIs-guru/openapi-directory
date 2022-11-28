from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDiscoveredResourceCountsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    resource_counts: Optional[List[ResourceCount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceCounts') }})
    total_discovered_resources: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalDiscoveredResources') }})
    
