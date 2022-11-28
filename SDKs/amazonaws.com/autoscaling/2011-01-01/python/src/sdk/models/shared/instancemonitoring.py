from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InstanceMonitoring:
    r"""InstanceMonitoring
    Describes whether detailed monitoring is enabled for the Auto Scaling instances.
    """
    
    enabled: Optional[bool] = field(default=None)
    
