from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TooManyStreamingDistributionCnamEs:
    message: Optional[str] = field(default=None)
    
