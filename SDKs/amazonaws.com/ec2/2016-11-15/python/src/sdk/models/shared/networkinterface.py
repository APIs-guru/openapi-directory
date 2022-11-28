from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class NetworkInterface:
    r"""NetworkInterface
    Describes a network interface.
    """
    
    association: Optional[NetworkInterfaceAssociation] = field(default=None)
    attachment: Optional[NetworkInterfaceAttachment] = field(default=None)
    availability_zone: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    groups: Optional[List[GroupIdentifier]] = field(default=None)
    interface_type: Optional[NetworkInterfaceTypeEnum] = field(default=None)
    ipv4_prefixes: Optional[List[Ipv4PrefixSpecification]] = field(default=None)
    ipv6_addresses: Optional[List[NetworkInterfaceIpv6Address]] = field(default=None)
    ipv6_prefixes: Optional[List[Ipv6PrefixSpecification]] = field(default=None)
    mac_address: Optional[str] = field(default=None)
    network_interface_id: Optional[str] = field(default=None)
    outpost_arn: Optional[str] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    private_dns_name: Optional[str] = field(default=None)
    private_ip_address: Optional[str] = field(default=None)
    private_ip_addresses: Optional[List[NetworkInterfacePrivateIPAddress]] = field(default=None)
    requester_id: Optional[str] = field(default=None)
    requester_managed: Optional[bool] = field(default=None)
    source_dest_check: Optional[bool] = field(default=None)
    status: Optional[NetworkInterfaceStatusEnum] = field(default=None)
    subnet_id: Optional[str] = field(default=None)
    tag_set: Optional[List[Tag]] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
