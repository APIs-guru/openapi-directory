from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ReferencedSecurityGroup:
    r"""ReferencedSecurityGroup
     Describes the security group that is referenced in the security group rule.
    """
    
    group_id: Optional[str] = field(default=None)
    peering_status: Optional[str] = field(default=None)
    user_id: Optional[str] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    vpc_peering_connection_id: Optional[str] = field(default=None)
    
