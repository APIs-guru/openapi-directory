from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LaunchTemplatesMonitoring:
    r"""LaunchTemplatesMonitoring
    Describes the monitoring for the instance.
    """
    
    enabled: Optional[bool] = field(default=None)
    
