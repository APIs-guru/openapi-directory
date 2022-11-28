from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AvailabilityZone:
    r"""AvailabilityZone
    Describes an Availability Zone in which the cluster is launched.
    """
    
    name: Optional[str] = field(default=None)
    
