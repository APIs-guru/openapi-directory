from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class FpgaInfo:
    r"""FpgaInfo
    Describes the FPGAs for the instance type.
    """
    
    fpgas: Optional[List[FpgaDeviceInfo]] = field(default=None)
    total_fpga_memory_in_mi_b: Optional[int] = field(default=None)
    
