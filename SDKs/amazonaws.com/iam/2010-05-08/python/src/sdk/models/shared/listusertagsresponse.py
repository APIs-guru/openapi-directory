from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListUserTagsResponse:
    tags: List[Tag] = field()
    is_truncated: Optional[bool] = field(default=None)
    marker: Optional[str] = field(default=None)
    
