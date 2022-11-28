from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DisableVpcClassicLinkResult:
    return_: Optional[bool] = field(default=None)
    
