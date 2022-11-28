from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class VolumeStatusDetails:
    r"""VolumeStatusDetails
    Describes a volume status.
    """
    
    name: Optional[VolumeStatusNameEnum] = field(default=None)
    status: Optional[str] = field(default=None)
    
