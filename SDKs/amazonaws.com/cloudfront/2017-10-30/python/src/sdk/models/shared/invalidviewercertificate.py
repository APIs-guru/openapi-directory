from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidViewerCertificate:
    message: Optional[str] = field(default=None)
    
