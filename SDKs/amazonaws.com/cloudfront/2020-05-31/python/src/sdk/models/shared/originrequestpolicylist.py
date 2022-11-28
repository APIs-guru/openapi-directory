from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class OriginRequestPolicyList:
    r"""OriginRequestPolicyList
    A list of origin request policies.
    """
    
    max_items: int = field()
    quantity: int = field()
    items: Optional[List[OriginRequestPolicySummary]] = field(default=None)
    next_marker: Optional[str] = field(default=None)
    
