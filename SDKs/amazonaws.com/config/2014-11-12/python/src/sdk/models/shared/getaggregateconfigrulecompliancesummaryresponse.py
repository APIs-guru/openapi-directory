from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import aggregatecompliancecount


@dataclass_json
@dataclass
class GetAggregateConfigRuleComplianceSummaryResponse:
    aggregate_compliance_counts: Optional[List[aggregatecompliancecount.AggregateComplianceCount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AggregateComplianceCounts' }})
    group_by_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupByKey' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
