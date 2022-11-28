from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TooManyOriginCustomHeaders:
    message: Optional[str] = field(default=None)
    
