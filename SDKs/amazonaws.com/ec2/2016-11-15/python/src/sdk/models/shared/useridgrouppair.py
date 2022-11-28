from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UserIDGroupPair:
    r"""UserIDGroupPair
    Describes a security group and Amazon Web Services account ID pair.
    """
    
    description: Optional[str] = field(default=None)
    group_id: Optional[str] = field(default=None)
    group_name: Optional[str] = field(default=None)
    peering_status: Optional[str] = field(default=None)
    user_id: Optional[str] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    vpc_peering_connection_id: Optional[str] = field(default=None)
    
