from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidLocationCode:
    message: Optional[str] = field(default=None)
    
