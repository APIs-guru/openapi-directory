from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class LocalGateway:
    r"""LocalGateway
    Describes a local gateway.
    """
    
    local_gateway_id: Optional[str] = field(default=None)
    outpost_arn: Optional[str] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    state: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
