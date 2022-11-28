from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ClientVpnAuthorizationRuleStatus:
    r"""ClientVpnAuthorizationRuleStatus
    Describes the state of an authorization rule.
    """
    
    code: Optional[ClientVpnAuthorizationRuleStatusCodeEnum] = field(default=None)
    message: Optional[str] = field(default=None)
    
