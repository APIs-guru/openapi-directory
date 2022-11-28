from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteFpgaImageResult:
    return_: Optional[bool] = field(default=None)
    
