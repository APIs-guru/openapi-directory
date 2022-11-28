from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TooManyTrustedSigners:
    r"""TooManyTrustedSigners
    Your request contains more trusted signers than are allowed per distribution.
    """
    
    message: Optional[str] = field(default=None)
    
