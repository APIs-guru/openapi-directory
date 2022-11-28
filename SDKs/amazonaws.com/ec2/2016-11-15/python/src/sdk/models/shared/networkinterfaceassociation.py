from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NetworkInterfaceAssociation:
    r"""NetworkInterfaceAssociation
    Describes association information for an Elastic IP address (IPv4 only), or a Carrier IP address (for a network interface which resides in a subnet in a Wavelength Zone).
    """
    
    allocation_id: Optional[str] = field(default=None)
    association_id: Optional[str] = field(default=None)
    carrier_ip: Optional[str] = field(default=None)
    customer_owned_ip: Optional[str] = field(default=None)
    ip_owner_id: Optional[str] = field(default=None)
    public_dns_name: Optional[str] = field(default=None)
    public_ip: Optional[str] = field(default=None)
    
