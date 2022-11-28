from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class EnvironmentResourcesDescription:
    r"""EnvironmentResourcesDescription
    Describes the AWS resources in use by this environment. This data is not live data.
    """
    
    load_balancer: Optional[LoadBalancerDescription] = field(default=None)
    
