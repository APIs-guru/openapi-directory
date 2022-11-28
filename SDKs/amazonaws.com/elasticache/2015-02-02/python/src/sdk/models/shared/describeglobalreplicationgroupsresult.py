from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeGlobalReplicationGroupsResult:
    global_replication_groups: Optional[List[GlobalReplicationGroup]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
