from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class InstancePrivateIPAddress:
    r"""InstancePrivateIPAddress
    Describes a private IPv4 address.
    """
    
    association: Optional[InstanceNetworkInterfaceAssociation] = field(default=None)
    primary: Optional[bool] = field(default=None)
    private_dns_name: Optional[str] = field(default=None)
    private_ip_address: Optional[str] = field(default=None)
    
