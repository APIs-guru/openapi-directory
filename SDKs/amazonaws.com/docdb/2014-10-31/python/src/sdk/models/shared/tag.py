from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Tag:
    r"""Tag
    Metadata assigned to an Amazon DocumentDB resource consisting of a key-value pair.
    """
    
    key: Optional[str] = field(default=None)
    value: Optional[str] = field(default=None)
    
