from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PolicyInformation:
    r"""PolicyInformation
    Defines the X.509 <code>CertificatePolicies</code> extension.
    """
    
    cert_policy_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertPolicyId') }})
    policy_qualifiers: Optional[List[PolicyQualifierInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyQualifiers') }})
    
