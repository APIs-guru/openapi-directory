from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class SslPolicy:
    r"""SslPolicy
    Information about a policy used for SSL negotiation.
    """
    
    ciphers: Optional[List[Cipher]] = field(default=None)
    name: Optional[str] = field(default=None)
    ssl_protocols: Optional[List[str]] = field(default=None)
    
