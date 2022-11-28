from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class RevokeClientVpnIngressResult:
    status: Optional[ClientVpnAuthorizationRuleStatus] = field(default=None)
    
