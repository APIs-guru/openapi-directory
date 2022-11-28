from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class TargetNetwork:
    r"""TargetNetwork
    Describes a target network associated with a Client VPN endpoint.
    """
    
    association_id: Optional[str] = field(default=None)
    client_vpn_endpoint_id: Optional[str] = field(default=None)
    security_groups: Optional[List[str]] = field(default=None)
    status: Optional[AssociationStatus] = field(default=None)
    target_network_id: Optional[str] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
