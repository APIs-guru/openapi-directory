from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeEnvironmentManagedActionsResult:
    r"""DescribeEnvironmentManagedActionsResult
    The result message containing a list of managed actions.
    """
    
    managed_actions: Optional[List[ManagedAction]] = field(default=None)
    
