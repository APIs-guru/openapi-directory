from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetConsoleScreenshotResult:
    image_data: Optional[str] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    
