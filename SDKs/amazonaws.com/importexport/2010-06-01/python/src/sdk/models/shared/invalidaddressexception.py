from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidAddressException:
    r"""InvalidAddressException
    The address specified in the manifest is invalid.
    """
    
    message: Optional[str] = field(default=None)
    
