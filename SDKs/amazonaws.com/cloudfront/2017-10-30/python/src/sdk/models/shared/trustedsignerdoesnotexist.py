from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TrustedSignerDoesNotExist:
    r"""TrustedSignerDoesNotExist
    One or more of your trusted signers don't exist.
    """
    
    message: Optional[str] = field(default=None)
    
