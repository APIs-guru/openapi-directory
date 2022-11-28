from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PeeringAttachmentStatus:
    r"""PeeringAttachmentStatus
    The status of the transit gateway peering attachment.
    """
    
    code: Optional[str] = field(default=None)
    message: Optional[str] = field(default=None)
    
