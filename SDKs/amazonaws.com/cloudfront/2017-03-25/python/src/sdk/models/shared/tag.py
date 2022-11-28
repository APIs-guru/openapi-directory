from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Tag:
    r"""Tag
     A complex type that contains <code>Tag</code> key and <code>Tag</code> value.
    """
    
    key: str = field()
    value: Optional[str] = field(default=None)
    
