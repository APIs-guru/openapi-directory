from dataclasses import dataclass, field
from enum import Enum
from . import *


@dataclass
class CachePolicySummary:
    r"""CachePolicySummary
    Contains a cache policy.
    """
    
    cache_policy: CachePolicy = field()
    type: CachePolicyTypeEnum = field()
    
