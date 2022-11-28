from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AttachNetworkInterfaceResult:
    r"""AttachNetworkInterfaceResult
    Contains the output of AttachNetworkInterface.
    """
    
    attachment_id: Optional[str] = field(default=None)
    network_card_index: Optional[int] = field(default=None)
    
