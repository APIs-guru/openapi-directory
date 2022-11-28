from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PortRange:
    r"""PortRange
    Describes a range of ports.
    """
    
    from_: Optional[int] = field(default=None)
    to: Optional[int] = field(default=None)
    
