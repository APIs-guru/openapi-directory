from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ModifyInstancePlacementResult:
    return_: Optional[bool] = field(default=None)
    
