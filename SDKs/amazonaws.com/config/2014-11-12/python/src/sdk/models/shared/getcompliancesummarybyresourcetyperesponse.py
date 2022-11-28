from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetComplianceSummaryByResourceTypeResponse:
    r"""GetComplianceSummaryByResourceTypeResponse
    <p/>
    """
    
    compliance_summaries_by_resource_type: Optional[List[ComplianceSummaryByResourceType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceSummariesByResourceType') }})
    
