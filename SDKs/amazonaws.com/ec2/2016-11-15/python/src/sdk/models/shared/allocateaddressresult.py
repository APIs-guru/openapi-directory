from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class AllocateAddressResult:
    allocation_id: Optional[str] = field(default=None)
    carrier_ip: Optional[str] = field(default=None)
    customer_owned_ip: Optional[str] = field(default=None)
    customer_owned_ipv4_pool: Optional[str] = field(default=None)
    domain: Optional[DomainTypeEnum] = field(default=None)
    network_border_group: Optional[str] = field(default=None)
    public_ip: Optional[str] = field(default=None)
    public_ipv4_pool: Optional[str] = field(default=None)
    
