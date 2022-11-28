from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ModifyLoadBalancerAttributesOutput:
    attributes: Optional[List[LoadBalancerAttribute]] = field(default=None)
    
