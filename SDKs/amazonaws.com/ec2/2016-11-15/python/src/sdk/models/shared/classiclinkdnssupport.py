from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ClassicLinkDNSSupport:
    r"""ClassicLinkDNSSupport
    Describes the ClassicLink DNS support status of a VPC.
    """
    
    classic_link_dns_supported: Optional[bool] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
