from dataclasses import dataclass, field
from typing import List
from enum import Enum
from . import *


@dataclass
class OriginSslProtocols:
    r"""OriginSslProtocols
    A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin. 
    """
    
    items: List[SslProtocolEnum] = field()
    quantity: int = field()
    
