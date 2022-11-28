from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateKeyGroupResult:
    key_group: Optional[KeyGroup] = field(default=None)
    
