from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resourcefilters
from . import resourcetype_enum


@dataclass_json
@dataclass
class ListAggregateDiscoveredResourcesRequest:
    configuration_aggregator_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationAggregatorName' }})
    filters: Optional[resourcefilters.ResourceFilters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resource_type: resourcetype_enum.ResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    
