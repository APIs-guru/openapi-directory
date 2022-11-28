from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class Listener:
    r"""Listener
    Information about a listener.
    """
    
    alpn_policy: Optional[List[str]] = field(default=None)
    certificates: Optional[List[Certificate]] = field(default=None)
    default_actions: Optional[List[Action]] = field(default=None)
    listener_arn: Optional[str] = field(default=None)
    load_balancer_arn: Optional[str] = field(default=None)
    port: Optional[int] = field(default=None)
    protocol: Optional[ProtocolEnumEnum] = field(default=None)
    ssl_policy: Optional[str] = field(default=None)
    
