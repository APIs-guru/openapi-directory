from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PrivateIPAddressSpecification:
    r"""PrivateIPAddressSpecification
    Describes a secondary private IPv4 address for a network interface.
    """
    
    primary: Optional[bool] = field(default=None)
    private_ip_address: Optional[str] = field(default=None)
    
