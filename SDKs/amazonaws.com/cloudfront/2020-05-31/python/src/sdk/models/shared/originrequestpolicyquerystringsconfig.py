from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class OriginRequestPolicyQueryStringsConfig:
    r"""OriginRequestPolicyQueryStringsConfig
    An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in requests that CloudFront sends to the origin.
    """
    
    query_string_behavior: OriginRequestPolicyQueryStringBehaviorEnum = field()
    query_strings: Optional[QueryStringNames] = field(default=None)
    
