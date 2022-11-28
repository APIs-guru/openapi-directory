from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TargetDescription:
    r"""TargetDescription
    Information about a target.
    """
    
    id: str = field()
    availability_zone: Optional[str] = field(default=None)
    port: Optional[int] = field(default=None)
    
