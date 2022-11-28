from dataclasses import dataclass, field
from typing import Optional


@dataclass
class EnabledMetric:
    r"""EnabledMetric
    Describes an enabled metric.
    """
    
    granularity: Optional[str] = field(default=None)
    metric: Optional[str] = field(default=None)
    
