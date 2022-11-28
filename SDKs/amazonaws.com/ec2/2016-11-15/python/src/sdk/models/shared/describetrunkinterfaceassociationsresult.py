from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeTrunkInterfaceAssociationsResult:
    interface_associations: Optional[List[TrunkInterfaceAssociation]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
