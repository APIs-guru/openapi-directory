from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class LaunchTemplateInstanceNetworkInterfaceSpecification:
    r"""LaunchTemplateInstanceNetworkInterfaceSpecification
    Describes a network interface.
    """
    
    associate_carrier_ip_address: Optional[bool] = field(default=None)
    associate_public_ip_address: Optional[bool] = field(default=None)
    delete_on_termination: Optional[bool] = field(default=None)
    description: Optional[str] = field(default=None)
    device_index: Optional[int] = field(default=None)
    groups: Optional[List[str]] = field(default=None)
    interface_type: Optional[str] = field(default=None)
    ipv4_prefix_count: Optional[int] = field(default=None)
    ipv4_prefixes: Optional[List[Ipv4PrefixSpecificationResponse]] = field(default=None)
    ipv6_address_count: Optional[int] = field(default=None)
    ipv6_addresses: Optional[List[InstanceIpv6Address]] = field(default=None)
    ipv6_prefix_count: Optional[int] = field(default=None)
    ipv6_prefixes: Optional[List[Ipv6PrefixSpecificationResponse]] = field(default=None)
    network_card_index: Optional[int] = field(default=None)
    network_interface_id: Optional[str] = field(default=None)
    private_ip_address: Optional[str] = field(default=None)
    private_ip_addresses: Optional[List[PrivateIPAddressSpecification]] = field(default=None)
    secondary_private_ip_address_count: Optional[int] = field(default=None)
    subnet_id: Optional[str] = field(default=None)
    
