from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetOrganizationConfigRuleDetailedStatusResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    organization_config_rule_detailed_status: Optional[List[MemberAccountStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationConfigRuleDetailedStatus') }})
    
