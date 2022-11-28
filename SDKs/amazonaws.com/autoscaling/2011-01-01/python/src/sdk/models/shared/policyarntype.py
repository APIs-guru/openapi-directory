from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class PolicyArnType:
    r"""PolicyArnType
    Contains the output of PutScalingPolicy.
    """
    
    alarms: Optional[List[Alarm]] = field(default=None)
    policy_arn: Optional[str] = field(default=None)
    
