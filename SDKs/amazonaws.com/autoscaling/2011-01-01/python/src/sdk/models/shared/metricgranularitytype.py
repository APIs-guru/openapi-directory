from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MetricGranularityType:
    r"""MetricGranularityType
    Describes a granularity of a metric.
    """
    
    granularity: Optional[str] = field(default=None)
    
