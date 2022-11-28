from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class AuthorizationRule:
    r"""AuthorizationRule
    Information about an authorization rule.
    """
    
    access_all: Optional[bool] = field(default=None)
    client_vpn_endpoint_id: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    destination_cidr: Optional[str] = field(default=None)
    group_id: Optional[str] = field(default=None)
    status: Optional[ClientVpnAuthorizationRuleStatus] = field(default=None)
    
