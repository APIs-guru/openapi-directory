from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EvaluationResult:
    r"""EvaluationResult
    Describes the compliance status for the account. An account is considered noncompliant if it includes resources that are not protected by the specified policy or that don't comply with the policy.
    """
    
    compliance_status: Optional[PolicyComplianceStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceStatus') }})
    evaluation_limit_exceeded: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationLimitExceeded') }})
    violator_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolatorCount') }})
    
