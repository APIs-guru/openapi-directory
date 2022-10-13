from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import compliancesummary


@dataclass_json
@dataclass
class GetComplianceSummaryByConfigRuleResponse:
    compliance_summary: Optional[compliancesummary.ComplianceSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceSummary' }})
    
