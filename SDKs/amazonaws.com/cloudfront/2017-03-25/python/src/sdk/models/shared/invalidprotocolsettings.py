from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidProtocolSettings:
    r"""InvalidProtocolSettings
    You cannot specify SSLv3 as the minimum protocol version if you only want to support only clients that support Server Name Indication (SNI).
    """
    
    message: Optional[str] = field(default=None)
    
