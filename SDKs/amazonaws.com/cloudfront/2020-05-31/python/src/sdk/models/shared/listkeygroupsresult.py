from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ListKeyGroupsResult:
    key_group_list: Optional[KeyGroupList] = field(default=None)
    
