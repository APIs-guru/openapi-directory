from dataclasses import dataclass, field



@dataclass
class SendEmailResponse:
    r"""SendEmailResponse
    Represents a unique message ID.
    """
    
    message_id: str = field()
    
