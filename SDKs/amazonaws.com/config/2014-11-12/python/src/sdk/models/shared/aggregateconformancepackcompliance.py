from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import conformancepackcompliancetype_enum


@dataclass_json
@dataclass
class AggregateConformancePackCompliance:
    compliance_type: Optional[conformancepackcompliancetype_enum.ConformancePackComplianceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceType' }})
    compliant_rule_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompliantRuleCount' }})
    non_compliant_rule_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonCompliantRuleCount' }})
    total_rule_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalRuleCount' }})
    
