from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CreateRestoreImageTaskResult:
    image_id: Optional[str] = field(default=None)
    
