from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CreateSecurityGroupResult:
    group_id: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
