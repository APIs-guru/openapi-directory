from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Tag:
    r"""Tag
    Describes a tag applied to a resource in an environment.
    """
    
    key: Optional[str] = field(default=None)
    value: Optional[str] = field(default=None)
    
