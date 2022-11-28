from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ReplaceRouteTableAssociationResult:
    association_state: Optional[RouteTableAssociationState] = field(default=None)
    new_association_id: Optional[str] = field(default=None)
    
