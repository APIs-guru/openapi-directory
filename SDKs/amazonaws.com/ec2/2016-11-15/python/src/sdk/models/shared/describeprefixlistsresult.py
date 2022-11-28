from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribePrefixListsResult:
    next_token: Optional[str] = field(default=None)
    prefix_lists: Optional[List[PrefixList]] = field(default=None)
    
