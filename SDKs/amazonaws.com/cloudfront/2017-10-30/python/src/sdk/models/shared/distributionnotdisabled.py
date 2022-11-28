from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DistributionNotDisabled:
    message: Optional[str] = field(default=None)
    
