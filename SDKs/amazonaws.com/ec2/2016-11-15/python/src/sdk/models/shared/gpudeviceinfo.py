from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GpuDeviceInfo:
    r"""GpuDeviceInfo
    Describes the GPU accelerators for the instance type.
    """
    
    count: Optional[int] = field(default=None)
    manufacturer: Optional[str] = field(default=None)
    memory_info: Optional[GpuDeviceMemoryInfo] = field(default=None)
    name: Optional[str] = field(default=None)
    
