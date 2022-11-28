from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeComplianceByConfigRuleRequest:
    r"""DescribeComplianceByConfigRuleRequest
    <p/>
    """
    
    compliance_types: Optional[List[ComplianceTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceTypes') }})
    config_rule_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleNames') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
