from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class InstanceNetworkInterface:
    r"""InstanceNetworkInterface
    Describes a network interface.
    """
    
    association: Optional[InstanceNetworkInterfaceAssociation] = field(default=None)
    attachment: Optional[InstanceNetworkInterfaceAttachment] = field(default=None)
    description: Optional[str] = field(default=None)
    groups: Optional[List[GroupIdentifier]] = field(default=None)
    interface_type: Optional[str] = field(default=None)
    ipv4_prefixes: Optional[List[InstanceIpv4Prefix]] = field(default=None)
    ipv6_addresses: Optional[List[InstanceIpv6Address]] = field(default=None)
    ipv6_prefixes: Optional[List[InstanceIpv6Prefix]] = field(default=None)
    mac_address: Optional[str] = field(default=None)
    network_interface_id: Optional[str] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    private_dns_name: Optional[str] = field(default=None)
    private_ip_address: Optional[str] = field(default=None)
    private_ip_addresses: Optional[List[InstancePrivateIPAddress]] = field(default=None)
    source_dest_check: Optional[bool] = field(default=None)
    status: Optional[NetworkInterfaceStatusEnum] = field(default=None)
    subnet_id: Optional[str] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
