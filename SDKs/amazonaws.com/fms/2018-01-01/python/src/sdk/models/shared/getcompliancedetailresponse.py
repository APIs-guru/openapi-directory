from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import policycompliancedetail


@dataclass_json
@dataclass
class GetComplianceDetailResponse:
    policy_compliance_detail: Optional[policycompliancedetail.PolicyComplianceDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyComplianceDetail' }})
    
