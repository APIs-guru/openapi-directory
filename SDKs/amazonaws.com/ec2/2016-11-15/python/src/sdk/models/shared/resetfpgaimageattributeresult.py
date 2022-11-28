from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ResetFpgaImageAttributeResult:
    return_: Optional[bool] = field(default=None)
    
