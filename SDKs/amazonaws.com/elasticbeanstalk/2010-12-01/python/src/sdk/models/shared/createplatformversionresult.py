from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreatePlatformVersionResult:
    builder: Optional[Builder] = field(default=None)
    platform_summary: Optional[PlatformSummary] = field(default=None)
    
