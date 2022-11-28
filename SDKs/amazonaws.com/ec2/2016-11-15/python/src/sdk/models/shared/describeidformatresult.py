from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeIDFormatResult:
    statuses: Optional[List[IDFormat]] = field(default=None)
    
