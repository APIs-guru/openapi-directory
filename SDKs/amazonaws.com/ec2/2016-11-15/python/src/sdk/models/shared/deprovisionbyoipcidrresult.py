from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeprovisionByoipCidrResult:
    byoip_cidr: Optional[ByoipCidr] = field(default=None)
    
