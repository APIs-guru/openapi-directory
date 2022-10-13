from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import aggregateconformancepackcompliancesummary


@dataclass_json
@dataclass
class GetAggregateConformancePackComplianceSummaryResponse:
    aggregate_conformance_pack_compliance_summaries: Optional[List[aggregateconformancepackcompliancesummary.AggregateConformancePackComplianceSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AggregateConformancePackComplianceSummaries' }})
    group_by_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupByKey' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
