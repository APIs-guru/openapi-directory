from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import conformancepackcompliancesummary


@dataclass_json
@dataclass
class GetConformancePackComplianceSummaryResponse:
    conformance_pack_compliance_summary_list: Optional[List[conformancepackcompliancesummary.ConformancePackComplianceSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConformancePackComplianceSummaryList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
