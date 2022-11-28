from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class OriginRequestPolicyHeadersConfig:
    r"""OriginRequestPolicyHeadersConfig
    An object that determines whether any HTTP headers (and if so, which headers) are included in requests that CloudFront sends to the origin.
    """
    
    header_behavior: OriginRequestPolicyHeaderBehaviorEnum = field()
    headers: Optional[Headers] = field(default=None)
    
