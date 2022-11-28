from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeAggregateComplianceByConfigRulesResponse:
    aggregate_compliance_by_config_rules: Optional[List[AggregateComplianceByConfigRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AggregateComplianceByConfigRules') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
