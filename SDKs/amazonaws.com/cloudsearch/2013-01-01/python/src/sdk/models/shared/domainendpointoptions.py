from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class DomainEndpointOptions:
    r"""DomainEndpointOptions
    The domain's endpoint options.
    """
    
    enforce_https: Optional[bool] = field(default=None)
    tls_security_policy: Optional[TLSSecurityPolicyEnum] = field(default=None)
    
