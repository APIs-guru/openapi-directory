from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class CachePolicyHeadersConfig:
    r"""CachePolicyHeadersConfig
    An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and automatically included in requests that CloudFront sends to the origin.
    """
    
    header_behavior: CachePolicyHeaderBehaviorEnum = field()
    headers: Optional[Headers] = field(default=None)
    
