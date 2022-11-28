from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComplianceByConfigRule:
    r"""ComplianceByConfigRule
    Indicates whether an Config rule is compliant. A rule is compliant if all of the resources that the rule evaluated comply with it. A rule is noncompliant if any of these resources do not comply.
    """
    
    compliance: Optional[Compliance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Compliance') }})
    config_rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleName') }})
    
