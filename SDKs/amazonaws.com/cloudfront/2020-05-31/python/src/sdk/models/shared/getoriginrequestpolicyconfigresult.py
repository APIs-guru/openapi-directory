from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetOriginRequestPolicyConfigResult:
    origin_request_policy_config: Optional[OriginRequestPolicyConfig] = field(default=None)
    
