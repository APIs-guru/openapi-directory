from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LbCookieStickinessPolicy:
    r"""LbCookieStickinessPolicy
    Information about a policy for duration-based session stickiness.
    """
    
    cookie_expiration_period: Optional[int] = field(default=None)
    policy_name: Optional[str] = field(default=None)
    
