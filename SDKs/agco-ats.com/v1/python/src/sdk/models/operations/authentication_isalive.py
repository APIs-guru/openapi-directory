from dataclasses import dataclass, field



@dataclass
class AuthenticationIsAliveResponse:
    content_type: str = field()
    status_code: int = field()
    
