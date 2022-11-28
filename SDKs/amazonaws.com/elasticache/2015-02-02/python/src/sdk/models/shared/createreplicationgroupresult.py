from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateReplicationGroupResult:
    replication_group: Optional[ReplicationGroup] = field(default=None)
    
