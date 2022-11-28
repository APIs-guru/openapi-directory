from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PlacementResponse:
    r"""PlacementResponse
    Describes the placement of an instance.
    """
    
    group_name: Optional[str] = field(default=None)
    
