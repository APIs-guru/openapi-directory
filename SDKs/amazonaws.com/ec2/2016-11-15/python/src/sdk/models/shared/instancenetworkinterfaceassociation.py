from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InstanceNetworkInterfaceAssociation:
    r"""InstanceNetworkInterfaceAssociation
    Describes association information for an Elastic IP address (IPv4).
    """
    
    carrier_ip: Optional[str] = field(default=None)
    ip_owner_id: Optional[str] = field(default=None)
    public_dns_name: Optional[str] = field(default=None)
    public_ip: Optional[str] = field(default=None)
    
