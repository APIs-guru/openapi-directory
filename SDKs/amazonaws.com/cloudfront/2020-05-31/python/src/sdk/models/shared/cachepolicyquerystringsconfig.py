from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class CachePolicyQueryStringsConfig:
    r"""CachePolicyQueryStringsConfig
    An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and automatically included in requests that CloudFront sends to the origin.
    """
    
    query_string_behavior: CachePolicyQueryStringBehaviorEnum = field()
    query_strings: Optional[QueryStringNames] = field(default=None)
    
