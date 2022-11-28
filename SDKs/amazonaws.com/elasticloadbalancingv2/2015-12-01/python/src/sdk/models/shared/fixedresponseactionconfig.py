from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FixedResponseActionConfig:
    r"""FixedResponseActionConfig
    Information about an action that returns a custom HTTP response.
    """
    
    status_code: str = field()
    content_type: Optional[str] = field(default=None)
    message_body: Optional[str] = field(default=None)
    
