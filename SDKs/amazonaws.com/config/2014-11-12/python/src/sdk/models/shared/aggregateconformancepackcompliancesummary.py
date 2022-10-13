from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import aggregateconformancepackcompliancecount


@dataclass_json
@dataclass
class AggregateConformancePackComplianceSummary:
    compliance_summary: Optional[aggregateconformancepackcompliancecount.AggregateConformancePackComplianceCount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceSummary' }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupName' }})
    
