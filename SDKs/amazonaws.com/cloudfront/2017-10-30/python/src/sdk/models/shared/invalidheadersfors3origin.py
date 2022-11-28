from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidHeadersForS3Origin:
    message: Optional[str] = field(default=None)
    
