from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DeletionTaskFailureReasonType:
    r"""DeletionTaskFailureReasonType
    <p>The reason that the service-linked role deletion failed.</p> <p>This data type is used as a response element in the <a>GetServiceLinkedRoleDeletionStatus</a> operation.</p>
    """
    
    reason: Optional[str] = field(default=None)
    role_usage_list: Optional[List[RoleUsageType]] = field(default=None)
    
