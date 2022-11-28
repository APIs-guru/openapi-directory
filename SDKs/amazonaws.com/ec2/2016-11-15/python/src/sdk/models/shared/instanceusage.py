from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InstanceUsage:
    r"""InstanceUsage
    Information about the Capacity Reservation usage.
    """
    
    account_id: Optional[str] = field(default=None)
    used_instance_count: Optional[int] = field(default=None)
    
