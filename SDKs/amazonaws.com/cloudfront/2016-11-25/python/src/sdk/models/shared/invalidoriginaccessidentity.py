from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidOriginAccessIdentity:
    r"""InvalidOriginAccessIdentity
    The origin access identity is not valid or doesn't exist.
    """
    
    message: Optional[str] = field(default=None)
    
