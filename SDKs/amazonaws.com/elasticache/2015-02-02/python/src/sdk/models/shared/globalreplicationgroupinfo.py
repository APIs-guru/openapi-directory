from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GlobalReplicationGroupInfo:
    r"""GlobalReplicationGroupInfo
    The name of the Global datastore and role of this replication group in the Global datastore.
    """
    
    global_replication_group_id: Optional[str] = field(default=None)
    global_replication_group_member_role: Optional[str] = field(default=None)
    
