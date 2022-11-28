from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListPlatformVersionsResult:
    next_token: Optional[str] = field(default=None)
    platform_summary_list: Optional[List[PlatformSummary]] = field(default=None)
    
