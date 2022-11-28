from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class CustomOriginConfig:
    r"""CustomOriginConfig
    A customer origin.
    """
    
    http_port: int = field()
    https_port: int = field()
    origin_protocol_policy: OriginProtocolPolicyEnum = field()
    origin_keepalive_timeout: Optional[int] = field(default=None)
    origin_read_timeout: Optional[int] = field(default=None)
    origin_ssl_protocols: Optional[OriginSslProtocols] = field(default=None)
    
