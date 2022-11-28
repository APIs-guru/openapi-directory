from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class AssociateTrunkInterfaceResult:
    client_token: Optional[str] = field(default=None)
    interface_association: Optional[TrunkInterfaceAssociation] = field(default=None)
    
