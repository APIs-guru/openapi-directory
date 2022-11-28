from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeleteClientVpnRouteResult:
    status: Optional[ClientVpnRouteStatus] = field(default=None)
    
