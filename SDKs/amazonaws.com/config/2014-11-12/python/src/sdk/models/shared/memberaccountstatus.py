from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import memberaccountrulestatus_enum


@dataclass_json
@dataclass
class MemberAccountStatus:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    config_rule_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRuleName' }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    member_account_rule_status: memberaccountrulestatus_enum.MemberAccountRuleStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemberAccountRuleStatus' }})
    
