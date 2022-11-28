from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class AssignIpv6AddressesResult:
    assigned_ipv6_addresses: Optional[List[str]] = field(default=None)
    assigned_ipv6_prefixes: Optional[List[str]] = field(default=None)
    network_interface_id: Optional[str] = field(default=None)
    
