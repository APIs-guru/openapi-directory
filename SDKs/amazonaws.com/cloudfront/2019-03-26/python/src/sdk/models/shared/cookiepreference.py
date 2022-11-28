from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class CookiePreference:
    r"""CookiePreference
    A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html\">Caching Content Based on Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.
    """
    
    forward: ItemSelectionEnum = field()
    whitelisted_names: Optional[CookieNames] = field(default=None)
    
