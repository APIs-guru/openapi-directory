from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidOriginKeepaliveTimeout:
    message: Optional[str] = field(default=None)
    
