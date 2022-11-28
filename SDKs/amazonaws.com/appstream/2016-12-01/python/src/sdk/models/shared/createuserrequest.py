from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateUserRequest:
    authentication_type: AuthenticationTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthenticationType') }})
    user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstName') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastName') }})
    message_action: Optional[MessageActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageAction') }})
    
