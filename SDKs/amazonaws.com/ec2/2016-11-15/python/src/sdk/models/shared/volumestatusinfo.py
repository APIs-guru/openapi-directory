from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class VolumeStatusInfo:
    r"""VolumeStatusInfo
    Describes the status of a volume.
    """
    
    details: Optional[List[VolumeStatusDetails]] = field(default=None)
    status: Optional[VolumeStatusInfoStatusEnum] = field(default=None)
    
