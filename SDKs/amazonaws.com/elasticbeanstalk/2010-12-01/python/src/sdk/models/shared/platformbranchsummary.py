from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class PlatformBranchSummary:
    r"""PlatformBranchSummary
    Summary information about a platform branch.
    """
    
    branch_name: Optional[str] = field(default=None)
    branch_order: Optional[int] = field(default=None)
    lifecycle_state: Optional[str] = field(default=None)
    platform_name: Optional[str] = field(default=None)
    supported_tier_list: Optional[List[str]] = field(default=None)
    
