from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import memberaccountrulestatus_enum


@dataclass_json
@dataclass
class StatusDetailFilters:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    member_account_rule_status: Optional[memberaccountrulestatus_enum.MemberAccountRuleStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemberAccountRuleStatus' }})
    
