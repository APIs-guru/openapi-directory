from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class LoadBalancerAttributes:
    r"""LoadBalancerAttributes
    The attributes for a load balancer.
    """
    
    access_log: Optional[AccessLog] = field(default=None)
    additional_attributes: Optional[List[AdditionalAttribute]] = field(default=None)
    connection_draining: Optional[ConnectionDraining] = field(default=None)
    connection_settings: Optional[ConnectionSettings] = field(default=None)
    cross_zone_load_balancing: Optional[CrossZoneLoadBalancing] = field(default=None)
    
