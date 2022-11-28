from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeConformancePackComplianceResponse:
    conformance_pack_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackName') }})
    conformance_pack_rule_compliance_list: List[ConformancePackRuleCompliance] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackRuleComplianceList') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
