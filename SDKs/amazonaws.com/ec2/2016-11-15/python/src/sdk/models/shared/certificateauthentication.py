from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CertificateAuthentication:
    r"""CertificateAuthentication
    Information about the client certificate used for authentication.
    """
    
    client_root_certificate_chain: Optional[str] = field(default=None)
    
