from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AdjustmentType:
    r"""AdjustmentType
    Describes a policy adjustment type.
    """
    
    adjustment_type: Optional[str] = field(default=None)
    
