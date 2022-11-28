from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class VpcAttachment:
    r"""VpcAttachment
    Describes an attachment between a virtual private gateway and a VPC.
    """
    
    state: Optional[AttachmentStatusEnum] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
