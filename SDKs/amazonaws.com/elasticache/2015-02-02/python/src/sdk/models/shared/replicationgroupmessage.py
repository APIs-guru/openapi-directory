from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ReplicationGroupMessage:
    r"""ReplicationGroupMessage
    Represents the output of a <code>DescribeReplicationGroups</code> operation.
    """
    
    marker: Optional[str] = field(default=None)
    replication_groups: Optional[List[ReplicationGroup]] = field(default=None)
    
