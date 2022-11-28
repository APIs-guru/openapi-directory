from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PublicKeyInUse:
    r"""PublicKeyInUse
    The specified public key is in use. 
    """
    
    message: Optional[str] = field(default=None)
    
