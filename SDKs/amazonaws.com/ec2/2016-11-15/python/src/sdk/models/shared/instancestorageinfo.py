from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class InstanceStorageInfo:
    r"""InstanceStorageInfo
    Describes the disks that are available for the instance type.
    """
    
    disks: Optional[List[DiskInfo]] = field(default=None)
    nvme_support: Optional[EphemeralNvmeSupportEnum] = field(default=None)
    total_size_in_gb: Optional[int] = field(default=None)
    
