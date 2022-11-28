from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class DiskInfo:
    r"""DiskInfo
    Describes the disk.
    """
    
    count: Optional[int] = field(default=None)
    size_in_gb: Optional[int] = field(default=None)
    type: Optional[DiskTypeEnum] = field(default=None)
    
