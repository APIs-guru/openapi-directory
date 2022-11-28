from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetKeyGroupConfigResult:
    key_group_config: Optional[KeyGroupConfig] = field(default=None)
    
