from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CopyFpgaImageResult:
    fpga_image_id: Optional[str] = field(default=None)
    
