from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class TagsType:
    next_token: Optional[str] = field(default=None)
    tags: Optional[List[TagDescription]] = field(default=None)
    
