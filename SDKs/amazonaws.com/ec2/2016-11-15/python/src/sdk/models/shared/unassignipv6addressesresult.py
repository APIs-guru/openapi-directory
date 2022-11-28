from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class UnassignIpv6AddressesResult:
    network_interface_id: Optional[str] = field(default=None)
    unassigned_ipv6_addresses: Optional[List[str]] = field(default=None)
    unassigned_ipv6_prefixes: Optional[List[str]] = field(default=None)
    
