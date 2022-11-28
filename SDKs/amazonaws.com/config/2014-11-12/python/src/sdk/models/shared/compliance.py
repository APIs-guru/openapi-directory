from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Compliance:
    r"""Compliance
    Indicates whether an Amazon Web Services resource or Config rule is compliant and provides the number of contributors that affect the compliance.
    """
    
    compliance_contributor_count: Optional[ComplianceContributorCount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceContributorCount') }})
    compliance_type: Optional[ComplianceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceType') }})
    
