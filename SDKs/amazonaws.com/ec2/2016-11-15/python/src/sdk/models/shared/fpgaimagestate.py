from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class FpgaImageState:
    r"""FpgaImageState
    Describes the state of the bitstream generation process for an Amazon FPGA image (AFI).
    """
    
    code: Optional[FpgaImageStateCodeEnum] = field(default=None)
    message: Optional[str] = field(default=None)
    
