from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class AssignPrivateIPAddressesResult:
    assigned_ipv4_prefixes: Optional[List[Ipv4PrefixSpecification]] = field(default=None)
    assigned_private_ip_addresses: Optional[List[AssignedPrivateIPAddress]] = field(default=None)
    network_interface_id: Optional[str] = field(default=None)
    
