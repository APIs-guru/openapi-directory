from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PrefixListID:
    r"""PrefixListID
    Describes a prefix list ID.
    """
    
    description: Optional[str] = field(default=None)
    prefix_list_id: Optional[str] = field(default=None)
    
