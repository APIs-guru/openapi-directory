from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SecurityGroupIdentifier:
    r"""SecurityGroupIdentifier
    Describes a security group.
    """
    
    group_id: Optional[str] = field(default=None)
    group_name: Optional[str] = field(default=None)
    
