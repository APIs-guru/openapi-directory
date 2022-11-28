from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeTagsResult:
    next_token: Optional[str] = field(default=None)
    tags: Optional[List[TagDescription]] = field(default=None)
    
