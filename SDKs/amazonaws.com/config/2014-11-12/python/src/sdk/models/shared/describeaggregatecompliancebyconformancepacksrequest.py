from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import aggregateconformancepackcompliancefilters


@dataclass_json
@dataclass
class DescribeAggregateComplianceByConformancePacksRequest:
    configuration_aggregator_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationAggregatorName' }})
    filters: Optional[aggregateconformancepackcompliancefilters.AggregateConformancePackComplianceFilters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
