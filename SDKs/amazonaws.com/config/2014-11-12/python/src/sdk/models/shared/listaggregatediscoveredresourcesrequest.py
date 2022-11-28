from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAggregateDiscoveredResourcesRequest:
    configuration_aggregator_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationAggregatorName') }})
    resource_type: ResourceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    filters: Optional[ResourceFilters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
