from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class CookiePreference:
    r"""CookiePreference
    <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include cookies in the cache key, use <code>CookiesConfig</code> in a cache policy. See <code>CachePolicy</code>.</p> <p>If you want to send cookies to the origin but not include them in the cache key, use <code>CookiesConfig</code> in an origin request policy. See <code>OriginRequestPolicy</code>.</p> <p>A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html\">Caching Content Based on Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
    """
    
    forward: ItemSelectionEnum = field()
    whitelisted_names: Optional[CookieNames] = field(default=None)
    
