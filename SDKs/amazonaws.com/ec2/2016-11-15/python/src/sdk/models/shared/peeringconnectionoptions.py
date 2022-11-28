from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PeeringConnectionOptions:
    r"""PeeringConnectionOptions
    Describes the VPC peering connection options.
    """
    
    allow_dns_resolution_from_remote_vpc: Optional[bool] = field(default=None)
    allow_egress_from_local_classic_link_to_remote_vpc: Optional[bool] = field(default=None)
    allow_egress_from_local_vpc_to_remote_classic_link: Optional[bool] = field(default=None)
    
