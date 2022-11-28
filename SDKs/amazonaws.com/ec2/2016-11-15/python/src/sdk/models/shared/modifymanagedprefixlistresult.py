from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyManagedPrefixListResult:
    prefix_list: Optional[ManagedPrefixList] = field(default=None)
    
