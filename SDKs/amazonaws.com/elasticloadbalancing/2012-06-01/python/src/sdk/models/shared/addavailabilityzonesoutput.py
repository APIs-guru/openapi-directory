from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class AddAvailabilityZonesOutput:
    r"""AddAvailabilityZonesOutput
    Contains the output of EnableAvailabilityZonesForLoadBalancer.
    """
    
    availability_zones: Optional[List[str]] = field(default=None)
    
