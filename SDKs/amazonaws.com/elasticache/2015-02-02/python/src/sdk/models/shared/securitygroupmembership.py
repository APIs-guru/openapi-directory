from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SecurityGroupMembership:
    r"""SecurityGroupMembership
    Represents a single cache security group and its status.
    """
    
    security_group_id: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    
