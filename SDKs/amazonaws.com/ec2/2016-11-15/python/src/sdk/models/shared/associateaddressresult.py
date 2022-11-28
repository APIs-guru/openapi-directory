from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AssociateAddressResult:
    association_id: Optional[str] = field(default=None)
    
