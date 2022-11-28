from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeSslPoliciesOutput:
    next_marker: Optional[str] = field(default=None)
    ssl_policies: Optional[List[SslPolicy]] = field(default=None)
    
