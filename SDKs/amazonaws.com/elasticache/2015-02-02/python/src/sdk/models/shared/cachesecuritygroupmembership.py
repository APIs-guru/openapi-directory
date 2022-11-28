from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CacheSecurityGroupMembership:
    r"""CacheSecurityGroupMembership
    Represents a cluster's status within a particular cache security group.
    """
    
    cache_security_group_name: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    
