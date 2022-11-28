from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StateReason:
    r"""StateReason
    Describes a state change.
    """
    
    code: Optional[str] = field(default=None)
    message: Optional[str] = field(default=None)
    
