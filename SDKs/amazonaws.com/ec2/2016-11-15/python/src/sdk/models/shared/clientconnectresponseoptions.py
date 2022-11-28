from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ClientConnectResponseOptions:
    r"""ClientConnectResponseOptions
    The options for managing connection authorization for new client connections.
    """
    
    enabled: Optional[bool] = field(default=None)
    lambda_function_arn: Optional[str] = field(default=None)
    status: Optional[ClientVpnEndpointAttributeStatus] = field(default=None)
    
