from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class RemoveAvailabilityZonesOutput:
    r"""RemoveAvailabilityZonesOutput
    Contains the output for DisableAvailabilityZonesForLoadBalancer.
    """
    
    availability_zones: Optional[List[str]] = field(default=None)
    
