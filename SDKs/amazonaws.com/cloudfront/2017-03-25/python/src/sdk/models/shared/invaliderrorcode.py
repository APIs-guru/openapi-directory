from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidErrorCode:
    message: Optional[str] = field(default=None)
    
