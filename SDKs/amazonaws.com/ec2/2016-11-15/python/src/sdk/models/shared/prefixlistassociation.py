from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PrefixListAssociation:
    r"""PrefixListAssociation
    Describes the resource with which a prefix list is associated.
    """
    
    resource_id: Optional[str] = field(default=None)
    resource_owner: Optional[str] = field(default=None)
    
