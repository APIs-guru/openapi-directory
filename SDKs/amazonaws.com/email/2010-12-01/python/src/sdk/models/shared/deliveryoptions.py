from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class DeliveryOptions:
    r"""DeliveryOptions
    Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
    """
    
    tls_policy: Optional[TLSPolicyEnum] = field(default=None)
    
