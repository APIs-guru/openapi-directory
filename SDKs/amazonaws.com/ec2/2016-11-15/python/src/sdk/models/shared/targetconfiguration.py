from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TargetConfiguration:
    r"""TargetConfiguration
    Information about the Convertible Reserved Instance offering.
    """
    
    instance_count: Optional[int] = field(default=None)
    offering_id: Optional[str] = field(default=None)
    
