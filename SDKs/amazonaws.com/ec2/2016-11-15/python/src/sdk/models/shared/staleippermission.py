from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class StaleIPPermission:
    r"""StaleIPPermission
    Describes a stale rule in a security group.
    """
    
    from_port: Optional[int] = field(default=None)
    ip_protocol: Optional[str] = field(default=None)
    ip_ranges: Optional[List[str]] = field(default=None)
    prefix_list_ids: Optional[List[str]] = field(default=None)
    to_port: Optional[int] = field(default=None)
    user_id_group_pairs: Optional[List[UserIDGroupPair]] = field(default=None)
    
