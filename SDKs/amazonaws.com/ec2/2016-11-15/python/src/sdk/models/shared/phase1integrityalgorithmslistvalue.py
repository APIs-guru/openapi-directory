from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Phase1IntegrityAlgorithmsListValue:
    r"""Phase1IntegrityAlgorithmsListValue
    The integrity algorithm for phase 1 IKE negotiations.
    """
    
    value: Optional[str] = field(default=None)
    
