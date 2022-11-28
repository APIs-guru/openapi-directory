from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class Address:
    r"""Address
    Describes an Elastic IP address, or a carrier IP address.
    """
    
    allocation_id: Optional[str] = field(default=None)
    association_id: Optional[str] = field(default=None)
    carrier_ip: Optional[str] = field(default=None)
    customer_owned_ip: Optional[str] = field(default=None)
    customer_owned_ipv4_pool: Optional[str] = field(default=None)
    domain: Optional[DomainTypeEnum] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    network_border_group: Optional[str] = field(default=None)
    network_interface_id: Optional[str] = field(default=None)
    network_interface_owner_id: Optional[str] = field(default=None)
    private_ip_address: Optional[str] = field(default=None)
    public_ip: Optional[str] = field(default=None)
    public_ipv4_pool: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
