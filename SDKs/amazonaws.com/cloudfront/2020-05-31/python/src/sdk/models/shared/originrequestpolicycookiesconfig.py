from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class OriginRequestPolicyCookiesConfig:
    r"""OriginRequestPolicyCookiesConfig
    An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in requests that CloudFront sends to the origin.
    """
    
    cookie_behavior: OriginRequestPolicyCookieBehaviorEnum = field()
    cookies: Optional[CookieNames] = field(default=None)
    
