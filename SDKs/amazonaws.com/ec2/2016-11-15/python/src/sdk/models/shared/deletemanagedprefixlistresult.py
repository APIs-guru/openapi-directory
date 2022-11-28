from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeleteManagedPrefixListResult:
    prefix_list: Optional[ManagedPrefixList] = field(default=None)
    
