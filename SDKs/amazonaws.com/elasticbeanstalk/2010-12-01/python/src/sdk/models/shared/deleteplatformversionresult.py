from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeletePlatformVersionResult:
    platform_summary: Optional[PlatformSummary] = field(default=None)
    
