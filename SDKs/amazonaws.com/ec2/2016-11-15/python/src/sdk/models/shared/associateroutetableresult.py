from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class AssociateRouteTableResult:
    association_id: Optional[str] = field(default=None)
    association_state: Optional[RouteTableAssociationState] = field(default=None)
    
