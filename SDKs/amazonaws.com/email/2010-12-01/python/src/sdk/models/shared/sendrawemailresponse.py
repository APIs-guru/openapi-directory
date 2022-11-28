from dataclasses import dataclass, field



@dataclass
class SendRawEmailResponse:
    r"""SendRawEmailResponse
    Represents a unique message ID.
    """
    
    message_id: str = field()
    
