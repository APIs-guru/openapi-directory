from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ConfirmProductInstanceResult:
    owner_id: Optional[str] = field(default=None)
    return_: Optional[bool] = field(default=None)
    
