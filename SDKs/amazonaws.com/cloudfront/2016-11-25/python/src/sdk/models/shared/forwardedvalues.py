from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ForwardedValues:
    r"""ForwardedValues
    A complex type that specifies how CloudFront handles query strings and cookies.
    """
    
    cookies: CookiePreference = field()
    query_string: bool = field()
    headers: Optional[Headers] = field(default=None)
    query_string_cache_keys: Optional[QueryStringCacheKeys] = field(default=None)
    
