from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DescribePlatformVersionResult:
    platform_description: Optional[PlatformDescription] = field(default=None)
    
