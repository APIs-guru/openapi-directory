from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeUsersResult:
    marker: Optional[str] = field(default=None)
    users: Optional[List[User]] = field(default=None)
    
