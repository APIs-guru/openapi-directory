from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DescribeFpgaImageAttributeResult:
    fpga_image_attribute: Optional[FpgaImageAttribute] = field(default=None)
    
