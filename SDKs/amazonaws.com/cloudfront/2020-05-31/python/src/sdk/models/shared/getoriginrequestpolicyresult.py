from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetOriginRequestPolicyResult:
    origin_request_policy: Optional[OriginRequestPolicy] = field(default=None)
    
