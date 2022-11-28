from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class UserGroup:
    arn: Optional[str] = field(default=None)
    engine: Optional[str] = field(default=None)
    pending_changes: Optional[UserGroupPendingChanges] = field(default=None)
    replication_groups: Optional[List[str]] = field(default=None)
    status: Optional[str] = field(default=None)
    user_group_id: Optional[str] = field(default=None)
    user_ids: Optional[List[str]] = field(default=None)
    
