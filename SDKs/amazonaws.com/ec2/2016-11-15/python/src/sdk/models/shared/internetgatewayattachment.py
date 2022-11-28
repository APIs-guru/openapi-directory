from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class InternetGatewayAttachment:
    r"""InternetGatewayAttachment
    Describes the attachment of a VPC to an internet gateway or an egress-only internet gateway.
    """
    
    state: Optional[AttachmentStatusEnum] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
