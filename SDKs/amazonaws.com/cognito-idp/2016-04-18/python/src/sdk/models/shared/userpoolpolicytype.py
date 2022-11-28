from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserPoolPolicyType:
    r"""UserPoolPolicyType
    The policy associated with a user pool.
    """
    
    password_policy: Optional[PasswordPolicyType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PasswordPolicy') }})
    
