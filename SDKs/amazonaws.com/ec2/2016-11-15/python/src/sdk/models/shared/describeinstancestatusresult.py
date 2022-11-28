from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeInstanceStatusResult:
    instance_statuses: Optional[List[InstanceStatus]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
