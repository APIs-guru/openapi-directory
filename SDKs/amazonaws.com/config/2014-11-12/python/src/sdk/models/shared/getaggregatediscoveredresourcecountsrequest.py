from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import resourcecountfilters
from . import resourcecountgroupkey_enum


@dataclass_json
@dataclass
class GetAggregateDiscoveredResourceCountsRequest:
    configuration_aggregator_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationAggregatorName' }})
    filters: Optional[resourcecountfilters.ResourceCountFilters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    group_by_key: Optional[resourcecountgroupkey_enum.ResourceCountGroupKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupByKey' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
