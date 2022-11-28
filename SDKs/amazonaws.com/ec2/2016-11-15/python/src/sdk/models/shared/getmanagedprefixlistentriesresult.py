from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GetManagedPrefixListEntriesResult:
    entries: Optional[List[PrefixListEntry]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
