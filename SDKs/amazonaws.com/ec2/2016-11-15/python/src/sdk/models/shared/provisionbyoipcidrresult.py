from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ProvisionByoipCidrResult:
    byoip_cidr: Optional[ByoipCidr] = field(default=None)
    
