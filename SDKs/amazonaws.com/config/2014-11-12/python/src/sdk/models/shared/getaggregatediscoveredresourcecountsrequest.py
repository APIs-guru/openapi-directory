from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetAggregateDiscoveredResourceCountsRequest:
    configuration_aggregator_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationAggregatorName') }})
    filters: Optional[ResourceCountFilters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    group_by_key: Optional[ResourceCountGroupKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupByKey') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
