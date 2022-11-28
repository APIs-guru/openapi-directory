from dataclasses import dataclass, field



@dataclass
class SendTemplatedEmailResponse:
    message_id: str = field()
    
