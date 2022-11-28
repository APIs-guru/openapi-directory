from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeFpgaImagesResult:
    fpga_images: Optional[List[FpgaImage]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
