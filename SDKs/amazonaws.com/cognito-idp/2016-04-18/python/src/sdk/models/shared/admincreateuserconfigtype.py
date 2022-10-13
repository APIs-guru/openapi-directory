from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import messagetemplatetype


@dataclass_json
@dataclass
class AdminCreateUserConfigType:
    allow_admin_create_user_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowAdminCreateUserOnly' }})
    invite_message_template: Optional[messagetemplatetype.MessageTemplateType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InviteMessageTemplate' }})
    unused_account_validity_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnusedAccountValidityDays' }})
    
