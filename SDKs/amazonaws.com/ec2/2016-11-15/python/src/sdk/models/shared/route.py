from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class Route:
    r"""Route
    Describes a route in a route table.
    """
    
    carrier_gateway_id: Optional[str] = field(default=None)
    destination_cidr_block: Optional[str] = field(default=None)
    destination_ipv6_cidr_block: Optional[str] = field(default=None)
    destination_prefix_list_id: Optional[str] = field(default=None)
    egress_only_internet_gateway_id: Optional[str] = field(default=None)
    gateway_id: Optional[str] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    instance_owner_id: Optional[str] = field(default=None)
    local_gateway_id: Optional[str] = field(default=None)
    nat_gateway_id: Optional[str] = field(default=None)
    network_interface_id: Optional[str] = field(default=None)
    origin: Optional[RouteOriginEnum] = field(default=None)
    state: Optional[RouteStateEnum] = field(default=None)
    transit_gateway_id: Optional[str] = field(default=None)
    vpc_peering_connection_id: Optional[str] = field(default=None)
    
