from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeManagedPrefixListsResult:
    next_token: Optional[str] = field(default=None)
    prefix_lists: Optional[List[ManagedPrefixList]] = field(default=None)
    
