from dataclasses import dataclass, field
from typing import Optional


@dataclass
class IkeVersionsListValue:
    r"""IkeVersionsListValue
    The internet key exchange (IKE) version permitted for the VPN tunnel.
    """
    
    value: Optional[str] = field(default=None)
    
