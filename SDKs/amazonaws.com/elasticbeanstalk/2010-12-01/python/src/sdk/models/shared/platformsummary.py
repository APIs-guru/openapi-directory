from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class PlatformSummary:
    r"""PlatformSummary
    Summary information about a platform version.
    """
    
    operating_system_name: Optional[str] = field(default=None)
    operating_system_version: Optional[str] = field(default=None)
    platform_arn: Optional[str] = field(default=None)
    platform_branch_lifecycle_state: Optional[str] = field(default=None)
    platform_branch_name: Optional[str] = field(default=None)
    platform_category: Optional[str] = field(default=None)
    platform_lifecycle_state: Optional[str] = field(default=None)
    platform_owner: Optional[str] = field(default=None)
    platform_status: Optional[PlatformStatusEnum] = field(default=None)
    platform_version: Optional[str] = field(default=None)
    supported_addon_list: Optional[List[str]] = field(default=None)
    supported_tier_list: Optional[List[str]] = field(default=None)
    
