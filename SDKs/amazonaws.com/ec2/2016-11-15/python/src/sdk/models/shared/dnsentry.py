from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DNSEntry:
    r"""DNSEntry
    Describes a DNS entry.
    """
    
    dns_name: Optional[str] = field(default=None)
    hosted_zone_id: Optional[str] = field(default=None)
    
