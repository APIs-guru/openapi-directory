from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CannotChangeImmutablePublicKeyFields:
    r"""CannotChangeImmutablePublicKeyFields
    You can't change the value of a public key.
    """
    
    message: Optional[str] = field(default=None)
    
