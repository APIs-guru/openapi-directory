from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import aggregateconformancepackcompliancesummaryfilters
from . import aggregateconformancepackcompliancesummarygroupkey_enum


@dataclass_json
@dataclass
class GetAggregateConformancePackComplianceSummaryRequest:
    configuration_aggregator_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationAggregatorName' }})
    filters: Optional[aggregateconformancepackcompliancesummaryfilters.AggregateConformancePackComplianceSummaryFilters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    group_by_key: Optional[aggregateconformancepackcompliancesummarygroupkey_enum.AggregateConformancePackComplianceSummaryGroupKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupByKey' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
