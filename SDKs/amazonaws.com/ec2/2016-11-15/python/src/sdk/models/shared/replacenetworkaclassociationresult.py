from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ReplaceNetworkACLAssociationResult:
    new_association_id: Optional[str] = field(default=None)
    
