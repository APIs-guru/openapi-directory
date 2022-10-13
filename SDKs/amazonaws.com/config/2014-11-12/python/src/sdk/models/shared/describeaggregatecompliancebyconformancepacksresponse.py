from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import aggregatecompliancebyconformancepack


@dataclass_json
@dataclass
class DescribeAggregateComplianceByConformancePacksResponse:
    aggregate_compliance_by_conformance_packs: Optional[List[aggregatecompliancebyconformancepack.AggregateComplianceByConformancePack]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AggregateComplianceByConformancePacks' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
