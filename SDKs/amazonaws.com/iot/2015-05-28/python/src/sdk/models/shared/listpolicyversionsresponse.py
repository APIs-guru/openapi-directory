from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import policyversion


@dataclass_json
@dataclass
class ListPolicyVersionsResponse:
    policy_versions: Optional[List[policyversion.PolicyVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyVersions' }})
    
