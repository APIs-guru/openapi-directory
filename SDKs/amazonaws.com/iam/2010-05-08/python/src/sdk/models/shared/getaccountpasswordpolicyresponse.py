from dataclasses import dataclass, field
from . import *


@dataclass
class GetAccountPasswordPolicyResponse:
    r"""GetAccountPasswordPolicyResponse
    Contains the response to a successful <a>GetAccountPasswordPolicy</a> request. 
    """
    
    password_policy: PasswordPolicy = field()
    
