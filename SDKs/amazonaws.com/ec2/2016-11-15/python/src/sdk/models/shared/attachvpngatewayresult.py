from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class AttachVpnGatewayResult:
    r"""AttachVpnGatewayResult
    Contains the output of AttachVpnGateway.
    """
    
    vpc_attachment: Optional[VpcAttachment] = field(default=None)
    
