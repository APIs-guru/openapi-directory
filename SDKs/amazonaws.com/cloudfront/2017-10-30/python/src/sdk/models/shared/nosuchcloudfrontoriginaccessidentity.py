from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NoSuchCloudFrontOriginAccessIdentity:
    r"""NoSuchCloudFrontOriginAccessIdentity
    The specified origin access identity does not exist.
    """
    
    message: Optional[str] = field(default=None)
    
