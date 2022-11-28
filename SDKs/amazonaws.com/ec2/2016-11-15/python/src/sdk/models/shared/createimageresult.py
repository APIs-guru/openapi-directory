from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CreateImageResult:
    image_id: Optional[str] = field(default=None)
    
