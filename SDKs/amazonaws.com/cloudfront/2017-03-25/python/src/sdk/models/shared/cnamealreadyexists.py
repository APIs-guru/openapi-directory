from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CnameAlreadyExists:
    message: Optional[str] = field(default=None)
    
