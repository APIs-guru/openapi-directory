from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeAdjustmentTypesAnswer:
    adjustment_types: Optional[List[AdjustmentType]] = field(default=None)
    
