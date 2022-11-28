from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeAggregateIDFormatResult:
    statuses: Optional[List[IDFormat]] = field(default=None)
    use_long_ids_aggregated: Optional[bool] = field(default=None)
    
