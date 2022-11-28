from dataclasses import dataclass, field
from typing import Optional


@dataclass
class VpcSecurityGroupMembership:
    r"""VpcSecurityGroupMembership
    Used as a response element for queries on virtual private cloud (VPC) security group membership.
    """
    
    status: Optional[str] = field(default=None)
    vpc_security_group_id: Optional[str] = field(default=None)
    
