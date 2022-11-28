from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidMinimumProtocolVersion:
    message: Optional[str] = field(default=None)
    
