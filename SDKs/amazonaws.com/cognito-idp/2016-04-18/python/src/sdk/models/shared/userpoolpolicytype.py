from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import passwordpolicytype


@dataclass_json
@dataclass
class UserPoolPolicyType:
    password_policy: Optional[passwordpolicytype.PasswordPolicyType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PasswordPolicy' }})
    
