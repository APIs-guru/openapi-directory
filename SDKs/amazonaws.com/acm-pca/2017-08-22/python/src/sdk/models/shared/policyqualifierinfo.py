from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PolicyQualifierInfo:
    r"""PolicyQualifierInfo
    Modifies the <code>CertPolicyId</code> of a <code>PolicyInformation</code> object with a qualifier. ACM Private CA supports the certification practice statement (CPS) qualifier.
    """
    
    policy_qualifier_id: PolicyQualifierIDEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyQualifierId') }})
    qualifier: Qualifier = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Qualifier') }})
    
