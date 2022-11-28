from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SpotFleetMonitoring:
    r"""SpotFleetMonitoring
    Describes whether monitoring is enabled.
    """
    
    enabled: Optional[bool] = field(default=None)
    
