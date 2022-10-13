from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import aggregateconformancepackcompliance


@dataclass_json
@dataclass
class AggregateComplianceByConformancePack:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsRegion' }})
    compliance: Optional[aggregateconformancepackcompliance.AggregateConformancePackCompliance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Compliance' }})
    conformance_pack_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConformancePackName' }})
    
