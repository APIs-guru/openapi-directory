from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DisassociateTrunkInterfaceResult:
    client_token: Optional[str] = field(default=None)
    return_: Optional[bool] = field(default=None)
    
