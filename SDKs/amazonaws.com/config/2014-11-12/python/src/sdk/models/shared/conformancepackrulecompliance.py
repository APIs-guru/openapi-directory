from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConformancePackRuleCompliance:
    r"""ConformancePackRuleCompliance
    Compliance information of one or more Config rules within a conformance pack. You can filter using Config rule names and compliance types.
    """
    
    compliance_type: Optional[ConformancePackComplianceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceType') }})
    config_rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleName') }})
    controls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Controls') }})
    
