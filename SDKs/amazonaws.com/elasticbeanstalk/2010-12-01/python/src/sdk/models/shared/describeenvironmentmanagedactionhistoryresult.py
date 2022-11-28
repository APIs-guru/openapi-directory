from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeEnvironmentManagedActionHistoryResult:
    r"""DescribeEnvironmentManagedActionHistoryResult
    A result message containing a list of completed and failed managed actions.
    """
    
    managed_action_history_items: Optional[List[ManagedActionHistoryItem]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
