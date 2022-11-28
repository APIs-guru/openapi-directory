from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateVpcEndpointResult:
    r"""CreateVpcEndpointResult
    Contains the output of CreateVpcEndpoint.
    """
    
    client_token: Optional[str] = field(default=None)
    vpc_endpoint: Optional[VpcEndpoint] = field(default=None)
    
