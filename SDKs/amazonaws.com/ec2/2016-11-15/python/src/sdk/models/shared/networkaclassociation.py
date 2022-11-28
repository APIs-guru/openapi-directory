from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NetworkACLAssociation:
    r"""NetworkACLAssociation
    Describes an association between a network ACL and a subnet.
    """
    
    network_acl_association_id: Optional[str] = field(default=None)
    network_acl_id: Optional[str] = field(default=None)
    subnet_id: Optional[str] = field(default=None)
    
