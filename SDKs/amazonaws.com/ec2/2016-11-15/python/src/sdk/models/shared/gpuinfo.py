from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GpuInfo:
    r"""GpuInfo
    Describes the GPU accelerators for the instance type.
    """
    
    gpus: Optional[List[GpuDeviceInfo]] = field(default=None)
    total_gpu_memory_in_mi_b: Optional[int] = field(default=None)
    
