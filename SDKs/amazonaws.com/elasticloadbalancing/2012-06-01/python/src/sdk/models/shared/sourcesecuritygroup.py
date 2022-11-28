from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SourceSecurityGroup:
    r"""SourceSecurityGroup
    Information about a source security group.
    """
    
    group_name: Optional[str] = field(default=None)
    owner_alias: Optional[str] = field(default=None)
    
