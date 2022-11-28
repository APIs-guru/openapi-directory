from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AnalysisRouteTableRoute:
    r"""AnalysisRouteTableRoute
    Describes a route table route.
    """
    
    destination_cidr: Optional[str] = field(default=None)
    destination_prefix_list_id: Optional[str] = field(default=None)
    egress_only_internet_gateway_id: Optional[str] = field(default=None)
    gateway_id: Optional[str] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    nat_gateway_id: Optional[str] = field(default=None)
    network_interface_id: Optional[str] = field(default=None)
    origin: Optional[str] = field(default=None)
    transit_gateway_id: Optional[str] = field(default=None)
    vpc_peering_connection_id: Optional[str] = field(default=None)
    
