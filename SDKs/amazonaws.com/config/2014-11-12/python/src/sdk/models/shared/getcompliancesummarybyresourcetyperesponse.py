from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import compliancesummarybyresourcetype


@dataclass_json
@dataclass
class GetComplianceSummaryByResourceTypeResponse:
    compliance_summaries_by_resource_type: Optional[List[compliancesummarybyresourcetype.ComplianceSummaryByResourceType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceSummariesByResourceType' }})
    
