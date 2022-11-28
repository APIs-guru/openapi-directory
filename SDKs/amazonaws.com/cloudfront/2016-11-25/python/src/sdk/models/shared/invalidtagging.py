from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidTagging:
    message: Optional[str] = field(default=None)
    
