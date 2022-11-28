from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserStackAssociation:
    r"""UserStackAssociation
    Describes a user in the user pool and the associated stack.
    """
    
    authentication_type: AuthenticationTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthenticationType') }})
    stack_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackName') }})
    user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    send_email_notification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SendEmailNotification') }})
    
