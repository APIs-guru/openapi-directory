from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TooManyCertificates:
    r"""TooManyCertificates
    You cannot create anymore custom SSL/TLS certificates.
    """
    
    message: Optional[str] = field(default=None)
    
