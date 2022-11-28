from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PublicKeyAlreadyExists:
    r"""PublicKeyAlreadyExists
    The specified public key already exists.
    """
    
    message: Optional[str] = field(default=None)
    
