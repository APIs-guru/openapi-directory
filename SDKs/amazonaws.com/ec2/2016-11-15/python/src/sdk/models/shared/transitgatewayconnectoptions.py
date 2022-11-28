from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayConnectOptions:
    r"""TransitGatewayConnectOptions
    Describes the Connect attachment options.
    """
    
    protocol: Optional[ProtocolValueEnum] = field(default=None)
    
