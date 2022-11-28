from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Phase1DhGroupNumbersListValue:
    r"""Phase1DhGroupNumbersListValue
    The Diffie-Hellmann group number for phase 1 IKE negotiations.
    """
    
    value: Optional[int] = field(default=None)
    
