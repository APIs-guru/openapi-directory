from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SecurityGroupReference:
    r"""SecurityGroupReference
    Describes a VPC with a security group that references your security group.
    """
    
    group_id: Optional[str] = field(default=None)
    referencing_vpc_id: Optional[str] = field(default=None)
    vpc_peering_connection_id: Optional[str] = field(default=None)
    
