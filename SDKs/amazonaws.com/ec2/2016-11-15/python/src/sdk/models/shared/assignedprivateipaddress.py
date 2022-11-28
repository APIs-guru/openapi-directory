from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AssignedPrivateIPAddress:
    r"""AssignedPrivateIPAddress
    Describes the private IP addresses assigned to a network interface.
    """
    
    private_ip_address: Optional[str] = field(default=None)
    
