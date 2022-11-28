from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FpgaDeviceMemoryInfo:
    r"""FpgaDeviceMemoryInfo
    Describes the memory for the FPGA accelerator for the instance type.
    """
    
    size_in_mi_b: Optional[int] = field(default=None)
    
