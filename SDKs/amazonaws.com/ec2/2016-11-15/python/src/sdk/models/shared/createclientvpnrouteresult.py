from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateClientVpnRouteResult:
    status: Optional[ClientVpnRouteStatus] = field(default=None)
    
