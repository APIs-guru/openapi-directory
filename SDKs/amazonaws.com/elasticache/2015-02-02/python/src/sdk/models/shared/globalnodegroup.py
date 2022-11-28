from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GlobalNodeGroup:
    r"""GlobalNodeGroup
    Indicates the slot configuration and global identifier for a slice group.
    """
    
    global_node_group_id: Optional[str] = field(default=None)
    slots: Optional[str] = field(default=None)
    
