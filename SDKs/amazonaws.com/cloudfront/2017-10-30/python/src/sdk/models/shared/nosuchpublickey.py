from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NoSuchPublicKey:
    r"""NoSuchPublicKey
    The specified public key doesn't exist.
    """
    
    message: Optional[str] = field(default=None)
    
