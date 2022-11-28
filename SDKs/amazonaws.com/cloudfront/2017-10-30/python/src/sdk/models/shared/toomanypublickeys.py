from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TooManyPublicKeys:
    r"""TooManyPublicKeys
    The maximum number of public keys for field-level encryption have been created. To create a new public key, delete one of the existing keys.
    """
    
    message: Optional[str] = field(default=None)
    
