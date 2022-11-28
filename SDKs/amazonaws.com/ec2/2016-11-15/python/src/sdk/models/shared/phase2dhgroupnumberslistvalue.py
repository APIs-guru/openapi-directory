from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Phase2DhGroupNumbersListValue:
    r"""Phase2DhGroupNumbersListValue
    The Diffie-Hellmann group number for phase 2 IKE negotiations.
    """
    
    value: Optional[int] = field(default=None)
    
