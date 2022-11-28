from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class FpgaDeviceInfo:
    r"""FpgaDeviceInfo
    Describes the FPGA accelerator for the instance type.
    """
    
    count: Optional[int] = field(default=None)
    manufacturer: Optional[str] = field(default=None)
    memory_info: Optional[FpgaDeviceMemoryInfo] = field(default=None)
    name: Optional[str] = field(default=None)
    
