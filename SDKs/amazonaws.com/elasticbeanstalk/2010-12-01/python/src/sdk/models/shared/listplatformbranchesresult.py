from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListPlatformBranchesResult:
    next_token: Optional[str] = field(default=None)
    platform_branch_summary_list: Optional[List[PlatformBranchSummary]] = field(default=None)
    
