from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidOriginReadTimeout:
    message: Optional[str] = field(default=None)
    
