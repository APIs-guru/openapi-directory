from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ByoipCidr:
    r"""ByoipCidr
    Information about an address range that is provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP).
    """
    
    cidr: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    state: Optional[ByoipCidrStateEnum] = field(default=None)
    status_message: Optional[str] = field(default=None)
    
