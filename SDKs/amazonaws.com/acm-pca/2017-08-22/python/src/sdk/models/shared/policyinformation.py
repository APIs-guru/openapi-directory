from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import policyqualifierinfo


@dataclass_json
@dataclass
class PolicyInformation:
    cert_policy_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertPolicyId' }})
    policy_qualifiers: Optional[List[policyqualifierinfo.PolicyQualifierInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyQualifiers' }})
    
