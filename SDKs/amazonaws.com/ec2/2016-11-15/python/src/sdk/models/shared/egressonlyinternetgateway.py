from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class EgressOnlyInternetGateway:
    r"""EgressOnlyInternetGateway
    Describes an egress-only internet gateway.
    """
    
    attachments: Optional[List[InternetGatewayAttachment]] = field(default=None)
    egress_only_internet_gateway_id: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
