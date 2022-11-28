from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InstanceCapacity:
    r"""InstanceCapacity
    Information about the number of instances that can be launched onto the Dedicated Host.
    """
    
    available_capacity: Optional[int] = field(default=None)
    instance_type: Optional[str] = field(default=None)
    total_capacity: Optional[int] = field(default=None)
    
