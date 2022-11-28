from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class AllowedNodeTypeModificationsMessage:
    r"""AllowedNodeTypeModificationsMessage
    Represents the allowed node types you can use to modify your cluster or replication group.
    """
    
    scale_down_modifications: Optional[List[str]] = field(default=None)
    scale_up_modifications: Optional[List[str]] = field(default=None)
    
