from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class AssociateClientVpnTargetNetworkResult:
    association_id: Optional[str] = field(default=None)
    status: Optional[AssociationStatus] = field(default=None)
    
