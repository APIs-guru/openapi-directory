from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SendCustomVerificationEmailResponse:
    r"""SendCustomVerificationEmailResponse
    The response received when attempting to send the custom verification email.
    """
    
    message_id: Optional[str] = field(default=None)
    
