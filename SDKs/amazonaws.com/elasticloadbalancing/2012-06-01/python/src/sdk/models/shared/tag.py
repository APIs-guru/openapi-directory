from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Tag:
    r"""Tag
    Information about a tag.
    """
    
    key: str = field()
    value: Optional[str] = field(default=None)
    
