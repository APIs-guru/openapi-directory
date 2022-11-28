from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ModifyFleetResult:
    return_: Optional[bool] = field(default=None)
    
