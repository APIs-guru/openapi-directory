from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateNetworkInterfaceResult:
    r"""CreateNetworkInterfaceResult
    Contains the output of CreateNetworkInterface.
    """
    
    client_token: Optional[str] = field(default=None)
    network_interface: Optional[NetworkInterface] = field(default=None)
    
