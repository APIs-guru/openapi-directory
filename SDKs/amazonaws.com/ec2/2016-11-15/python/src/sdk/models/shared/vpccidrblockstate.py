from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class VpcCidrBlockState:
    r"""VpcCidrBlockState
    Describes the state of a CIDR block.
    """
    
    state: Optional[VpcCidrBlockStateCodeEnum] = field(default=None)
    status_message: Optional[str] = field(default=None)
    
