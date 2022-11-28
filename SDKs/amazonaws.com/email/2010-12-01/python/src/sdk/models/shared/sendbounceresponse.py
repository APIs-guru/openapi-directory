from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SendBounceResponse:
    r"""SendBounceResponse
    Represents a unique message ID.
    """
    
    message_id: Optional[str] = field(default=None)
    
