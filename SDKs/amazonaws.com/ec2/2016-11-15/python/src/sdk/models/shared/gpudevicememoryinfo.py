from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GpuDeviceMemoryInfo:
    r"""GpuDeviceMemoryInfo
    Describes the memory available to the GPU accelerator.
    """
    
    size_in_mi_b: Optional[int] = field(default=None)
    
