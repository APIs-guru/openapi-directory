from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PrivateDNSDetails:
    r"""PrivateDNSDetails
    Information about the Private DNS name for interface endpoints.
    """
    
    private_dns_name: Optional[str] = field(default=None)
    
