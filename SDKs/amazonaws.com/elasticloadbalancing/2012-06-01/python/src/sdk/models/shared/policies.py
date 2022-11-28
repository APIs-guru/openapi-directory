from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class Policies:
    r"""Policies
    The policies for a load balancer.
    """
    
    app_cookie_stickiness_policies: Optional[List[AppCookieStickinessPolicy]] = field(default=None)
    lb_cookie_stickiness_policies: Optional[List[LbCookieStickinessPolicy]] = field(default=None)
    other_policies: Optional[List[str]] = field(default=None)
    
