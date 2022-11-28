from dataclasses import dataclass, field
from enum import Enum
from . import *


@dataclass
class OriginRequestPolicySummary:
    r"""OriginRequestPolicySummary
    Contains an origin request policy.
    """
    
    origin_request_policy: OriginRequestPolicy = field()
    type: OriginRequestPolicyTypeEnum = field()
    
