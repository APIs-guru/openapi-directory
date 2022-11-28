from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AppCookieStickinessPolicy:
    r"""AppCookieStickinessPolicy
    Information about a policy for application-controlled session stickiness.
    """
    
    cookie_name: Optional[str] = field(default=None)
    policy_name: Optional[str] = field(default=None)
    
