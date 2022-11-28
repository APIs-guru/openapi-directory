from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class RebalanceSlotsInGlobalReplicationGroupResult:
    global_replication_group: Optional[GlobalReplicationGroup] = field(default=None)
    
