from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteUserRequest:
    authentication_type: AuthenticationTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthenticationType') }})
    user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    
