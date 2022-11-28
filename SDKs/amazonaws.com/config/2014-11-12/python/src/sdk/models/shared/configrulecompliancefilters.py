from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigRuleComplianceFilters:
    r"""ConfigRuleComplianceFilters
    Filters the compliance results based on account ID, region, compliance type, and rule name.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRegion') }})
    compliance_type: Optional[ComplianceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceType') }})
    config_rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleName') }})
    
