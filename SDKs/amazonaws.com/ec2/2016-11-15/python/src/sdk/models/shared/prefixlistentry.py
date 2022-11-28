from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PrefixListEntry:
    r"""PrefixListEntry
    Describes a prefix list entry.
    """
    
    cidr: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    
