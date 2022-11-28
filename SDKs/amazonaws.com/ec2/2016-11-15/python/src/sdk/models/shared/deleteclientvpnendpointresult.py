from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeleteClientVpnEndpointResult:
    status: Optional[ClientVpnEndpointStatus] = field(default=None)
    
