from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AlternatePathHint:
    r"""AlternatePathHint
    Describes an potential intermediate component of a feasible path.
    """
    
    component_arn: Optional[str] = field(default=None)
    component_id: Optional[str] = field(default=None)
    
