from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import policycompliancestatus


@dataclass_json
@dataclass
class ListComplianceStatusResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    policy_compliance_status_list: Optional[List[policycompliancestatus.PolicyComplianceStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyComplianceStatusList' }})
    
