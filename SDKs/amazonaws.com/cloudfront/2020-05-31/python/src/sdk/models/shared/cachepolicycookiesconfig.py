from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class CachePolicyCookiesConfig:
    r"""CachePolicyCookiesConfig
    An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and automatically included in requests that CloudFront sends to the origin.
    """
    
    cookie_behavior: CachePolicyCookieBehaviorEnum = field()
    cookies: Optional[CookieNames] = field(default=None)
    
