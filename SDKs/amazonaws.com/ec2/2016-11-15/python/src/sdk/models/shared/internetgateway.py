from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class InternetGateway:
    r"""InternetGateway
    Describes an internet gateway.
    """
    
    attachments: Optional[List[InternetGatewayAttachment]] = field(default=None)
    internet_gateway_id: Optional[str] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
