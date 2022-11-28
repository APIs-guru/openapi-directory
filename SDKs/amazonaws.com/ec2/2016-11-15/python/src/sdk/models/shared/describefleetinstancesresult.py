from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeFleetInstancesResult:
    active_instances: Optional[List[ActiveInstance]] = field(default=None)
    fleet_id: Optional[str] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
