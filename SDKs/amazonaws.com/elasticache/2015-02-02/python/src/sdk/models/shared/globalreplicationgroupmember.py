from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class GlobalReplicationGroupMember:
    r"""GlobalReplicationGroupMember
    A member of a Global datastore. It contains the Replication Group Id, the Amazon region and the role of the replication group. 
    """
    
    automatic_failover: Optional[AutomaticFailoverStatusEnum] = field(default=None)
    replication_group_id: Optional[str] = field(default=None)
    replication_group_region: Optional[str] = field(default=None)
    role: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    
