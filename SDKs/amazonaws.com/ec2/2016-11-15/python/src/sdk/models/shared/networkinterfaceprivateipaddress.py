from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class NetworkInterfacePrivateIPAddress:
    r"""NetworkInterfacePrivateIPAddress
    Describes the private IPv4 address of a network interface.
    """
    
    association: Optional[NetworkInterfaceAssociation] = field(default=None)
    primary: Optional[bool] = field(default=None)
    private_dns_name: Optional[str] = field(default=None)
    private_ip_address: Optional[str] = field(default=None)
    
