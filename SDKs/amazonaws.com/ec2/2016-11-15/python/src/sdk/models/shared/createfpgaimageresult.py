from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CreateFpgaImageResult:
    fpga_image_global_id: Optional[str] = field(default=None)
    fpga_image_id: Optional[str] = field(default=None)
    
