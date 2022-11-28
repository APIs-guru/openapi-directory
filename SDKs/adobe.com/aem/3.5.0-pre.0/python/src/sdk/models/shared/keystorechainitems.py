from dataclasses import dataclass, field
from typing import Optional


@dataclass
class KeystoreChainItems:
    issuer: Optional[str] = field(default=None)
    not_after: Optional[str] = field(default=None)
    not_before: Optional[str] = field(default=None)
    serial_number: Optional[int] = field(default=None)
    subject: Optional[str] = field(default=None)
    
