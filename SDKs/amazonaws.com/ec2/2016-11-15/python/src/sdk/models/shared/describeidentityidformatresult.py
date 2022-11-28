from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeIdentityIDFormatResult:
    statuses: Optional[List[IDFormat]] = field(default=None)
    
