from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SpotInstanceStateFault:
    r"""SpotInstanceStateFault
    Describes a Spot Instance state change.
    """
    
    code: Optional[str] = field(default=None)
    message: Optional[str] = field(default=None)
    
