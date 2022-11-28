from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MetricCollectionType:
    r"""MetricCollectionType
    Describes a metric.
    """
    
    metric: Optional[str] = field(default=None)
    
