from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class RestoreManagedPrefixListVersionResult:
    prefix_list: Optional[ManagedPrefixList] = field(default=None)
    
