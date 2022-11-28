from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class Authentication:
    r"""Authentication
    Indicates whether the user requires a password to authenticate.
    """
    
    password_count: Optional[int] = field(default=None)
    type: Optional[AuthenticationTypeEnum] = field(default=None)
    
