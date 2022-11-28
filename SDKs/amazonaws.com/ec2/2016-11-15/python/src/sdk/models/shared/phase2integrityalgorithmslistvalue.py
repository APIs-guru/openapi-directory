from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Phase2IntegrityAlgorithmsListValue:
    r"""Phase2IntegrityAlgorithmsListValue
    The integrity algorithm for phase 2 IKE negotiations.
    """
    
    value: Optional[str] = field(default=None)
    
