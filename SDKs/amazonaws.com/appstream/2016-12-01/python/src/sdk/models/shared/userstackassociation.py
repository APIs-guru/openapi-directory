from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import authenticationtype_enum


@dataclass_json
@dataclass
class UserStackAssociation:
    authentication_type: authenticationtype_enum.AuthenticationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthenticationType' }})
    send_email_notification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SendEmailNotification' }})
    stack_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackName' }})
    user_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserName' }})
    
