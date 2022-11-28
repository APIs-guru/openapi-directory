from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StreamingDistributionAlreadyExists:
    message: Optional[str] = field(default=None)
    
