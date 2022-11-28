from dataclasses import dataclass, field
from typing import Optional


@dataclass
class IcmpTypeCode:
    r"""IcmpTypeCode
    Describes the ICMP type and code.
    """
    
    code: Optional[int] = field(default=None)
    type: Optional[int] = field(default=None)
    
